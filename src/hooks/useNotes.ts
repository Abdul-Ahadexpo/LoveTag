import { useEffect, useState } from 'react';
import { ref, push, set, query, orderByChild, equalTo, get, startAt, endAt } from 'firebase/database';
import { database } from '../firebase/config';
import { LoveNote, SearchParams } from '../types';
import toast from 'react-hot-toast';

export const useNotes = () => {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<LoveNote[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addNote = async (
    recipientName: string,
    message: string,
    recipientEmail?: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);

    try {
      // Check if user already submitted a note today
      const userIp = await fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => data.ip);
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayTimestamp = today.getTime();
      
      const ipRef = ref(database, 'submissions');
      const ipQuery = query(ipRef, orderByChild('ip'), equalTo(userIp));
      const ipSnapshot = await get(ipQuery);
      
      let canSubmit = true;
      ipSnapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        if (data.timestamp >= todayTimestamp) {
          canSubmit = false;
        }
      });
      
      if (!canSubmit) {
        setError('You can only submit one note per day');
        toast.error('You can only submit one note per day');
        setLoading(false);
        return false;
      }
      
      // Add the note
      const newNoteRef = push(ref(database, 'notes'));
      const newNote: Omit<LoveNote, 'id'> = {
        recipientName: recipientName.trim(),
        message: message.trim(),
        createdAt: Date.now(),
      };
      
      if (recipientEmail) {
        newNote.recipientEmail = recipientEmail.trim().toLowerCase();
      }
      
      await set(newNoteRef, newNote);
      
      // Record the submission
      const submissionRef = push(ref(database, 'submissions'));
      await set(submissionRef, {
        ip: userIp,
        timestamp: Date.now(),
      });
      
      toast.success('Your love note has been shared!');
      setLoading(false);
      return true;
    } catch (error) {
      console.error('Error adding note:', error);
      setError('Failed to add note. Please try again.');
      toast.error('Failed to add note. Please try again.');
      setLoading(false);
      return false;
    }
  };

  const searchNotes = async ({ name, email }: SearchParams) => {
    setLoading(true);
    setError(null);
    setNotes([]);
    
    try {
      if (email) {
        // Search by email (case insensitive, exact match)
        const emailLower = email.trim().toLowerCase();
        const emailRef = ref(database, 'notes');
        const emailQuery = query(emailRef, orderByChild('recipientEmail'), equalTo(emailLower));
        const emailSnapshot = await get(emailQuery);
        
        const foundNotes: LoveNote[] = [];
        emailSnapshot.forEach((childSnapshot) => {
          foundNotes.push({
            id: childSnapshot.key as string,
            ...childSnapshot.val(),
          });
        });
        
        setNotes(foundNotes.sort((a, b) => b.createdAt - a.createdAt));
      } else if (name) {
        // Search by name (partial match)
        const nameLower = name.trim().toLowerCase();
        const nameRef = ref(database, 'notes');
        const nameQuery = query(nameRef, orderByChild('recipientName'));
        const nameSnapshot = await get(nameQuery);
        
        const foundNotes: LoveNote[] = [];
        nameSnapshot.forEach((childSnapshot) => {
          const note = childSnapshot.val();
          if (note.recipientName.toLowerCase().includes(nameLower)) {
            foundNotes.push({
              id: childSnapshot.key as string,
              ...note,
            });
          }
        });
        
        setNotes(foundNotes.sort((a, b) => b.createdAt - a.createdAt));
      }
      
      setLoading(false);
    } catch (error) {
      console.error('Error searching notes:', error);
      setError('Failed to search notes. Please try again.');
      toast.error('Failed to search notes. Please try again.');
      setLoading(false);
    }
  };

  return {
    loading,
    notes,
    error,
    addNote,
    searchNotes,
  };
};
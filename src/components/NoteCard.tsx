import React from 'react';
import { Heart } from 'lucide-react';
import { LoveNote } from '../types';

interface NoteCardProps {
  note: LoveNote;
}

const NoteCard: React.FC<NoteCardProps> = ({ note }) => {
  const formattedDate = new Date(note.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="note-card bg-white rounded-lg shadow-md p-6 border border-primary-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 font-serif">
          To: {note.recipientName}
        </h3>
        <Heart className="w-5 h-5 text-primary-500" fill="#ec4899" />
      </div>
      
      <div className="mt-4 bg-primary-50 rounded-lg p-4">
        <p className="text-gray-700 font-serif italic text-lg leading-relaxed whitespace-pre-wrap">
          "{note.message}"
        </p>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>Anonymous</span>
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default NoteCard;
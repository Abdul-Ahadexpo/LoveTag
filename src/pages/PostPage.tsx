import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Send } from 'lucide-react';
import Layout from '../components/Layout';
import { useNotes } from '../hooks/useNotes';

const PostPage: React.FC = () => {
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const navigate = useNavigate();
  const { addNote, loading, error } = useNotes();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (recipientName.trim() === '' || message.trim() === '') {
      return;
    }
    
    const success = await addNote(
      recipientName,
      message,
      recipientEmail || undefined
    );
    
    if (success) {
      setSubmitted(true);
      
      // Reset form
      setRecipientName('');
      setRecipientEmail('');
      setMessage('');
      
      // Redirect after delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="flex justify-center mb-4">
          <Heart className="h-8 w-8 text-primary-500" fill="#f9a8d4" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-script">
          Share a Love Note
        </h1>
        <p className="text-center text-gray-600 mb-8 font-serif italic">
          "Express your feelings anonymously. Your identity remains your secret."
        </p>
        
        {submitted ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary-600" fill="#f9a8d4" />
              </div>
            </div>
            <h2 className="text-2xl font-comic font-bold text-gray-800 mb-3">
              Your note has been shared!
            </h2>
            <p className="text-gray-600 mb-6 font-comic">
              Your anonymous message is now out in the world. We'll redirect you to the home page in a moment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 mb-1 font-comic">
                Recipient's Name <span className="text-secondary-600">*</span>
              </label>
              <input
                type="text"
                id="recipientName"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
                required
                placeholder="Who is this note for?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="recipientEmail" className="block text-sm font-medium text-gray-700 mb-1 font-comic">
                Recipient's Email <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <input
                type="email"
                id="recipientEmail"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
                placeholder="For more accurate searching (never publicly displayed)"
              />
              <p className="mt-1 text-xs text-gray-500 font-comic">
                This makes it easier for them to find your note, but won't be shown publicly.
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 font-comic">
                Your Message <span className="text-secondary-600">*</span>
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
                rows={5}
                required
                placeholder="Write your anonymous love note here..."
                maxLength={500}
              ></textarea>
              <div className="flex justify-between mt-1">
                <p className="text-xs text-gray-500 font-comic">Your identity will remain anonymous</p>
                <p className="text-xs text-gray-500 font-comic">{message.length}/500</p>
              </div>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-secondary-50 border border-secondary-200 text-secondary-700 rounded-md font-comic">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center text-white font-comic font-medium py-3 px-4 rounded-md transition-colors ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-primary-600 hover:bg-primary-700'
              }`}
            >
              {loading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  <span>Send Anonymously</span>
                </>
              )}
            </button>
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-center text-gray-500 font-comic">
                You can submit one anonymous note per day. Your IP address is stored only to enforce this limit.
              </p>
            </div>
          </form>
        )}
      </div>
    </Layout>
  );
};

export default PostPage;
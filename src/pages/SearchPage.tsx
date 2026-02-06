import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search as SearchIcon, Heart } from 'lucide-react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import NoteCard from '../components/NoteCard';
import { useNotes } from '../hooks/useNotes';

const SearchPage: React.FC = () => {
  const location = useLocation();
  const { notes, loading, searchNotes } = useNotes();
  const [searched, setSearched] = useState(false);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const email = params.get('email');
    
    if (name || email) {
      handleSearch(name || undefined, email || undefined);
    }
  }, [location.search]);
  
  const handleSearch = (name?: string, email?: string) => {
    searchNotes({ name, email });
    setSearched(true);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-4">
          <Heart className="h-8 w-8 text-primary-500" fill="#f9a8d4" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-script">
          Find Love Notes
        </h1>
        <p className="text-center text-gray-600 mb-8 font-serif italic max-w-2xl mx-auto">
          "Has someone been thinking about you? Search by your name or email to discover anonymous love notes meant for you."
        </p>
        
        <div className="max-w-lg mx-auto mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>
        
        {searched && (
          <div className="mt-10">
            {loading ? (
              <div className="text-center py-10">
                <SearchIcon className="w-8 h-8 text-primary-400 animate-pulse mx-auto mb-4" />
                <p className="text-gray-600 font-comic">Searching for love notes...</p>
              </div>
            ) : notes.length > 0 ? (
              <>
                <h2 className="text-2xl font-comic text-center mb-8">
                  {notes.length} {notes.length === 1 ? 'note' : 'notes'} found
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {notes.map((note) => (
                    <NoteCard key={note.id} note={note} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-10 max-w-md mx-auto">
                <div className="h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-gray-300" />
                </div>
                <h2 className="text-2xl font-comic font-bold text-gray-800 mb-3">
                  No notes found
                </h2>
                <p className="text-gray-600 font-comic">
                  We couldn't find any love notes addressed to this name or email. Maybe your secret admirer
                  hasn't written yet?
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SearchPage;
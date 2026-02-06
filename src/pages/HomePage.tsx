import React, { useState } from 'react';
import { Heart, PenLine, Search } from 'lucide-react';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import { useNotes } from '../hooks/useNotes';

const HomePage: React.FC = () => {
  const { searchNotes } = useNotes();
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (name?: string, email?: string) => {
    if (name) {
      window.location.href = `/search?name=${encodeURIComponent(name)}`;
    } else if (email) {
      window.location.href = `/search?email=${encodeURIComponent(email)}`;
    }
  };

  return (
    <Layout>
      <section className="pt-10 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-primary-500 heart-beat" fill="#f9a8d4" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 font-script">
            LoveTag
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-comic italic">
            "A place where love hides in plain sight. Maybe someone's thinking of you too…"
          </p>
          
          <div className="mt-10 mb-16">
            {showSearch ? (
              <div className="max-w-xl mx-auto">
                <SearchForm onSearch={handleSearch} isInline={true} />
                <button 
                  onClick={() => setShowSearch(false)}
                  className="mt-4 text-primary-600 hover:text-primary-800 text-sm"
                >
                  Hide search
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowSearch(true)}
                className="flex items-center justify-center mx-auto py-3 px-6 bg-white border border-primary-200 rounded-lg shadow-sm hover:shadow-md transition-all text-gray-700 font-comic font-medium"
              >
                <Search className="w-5 h-5 mr-2 text-primary-500" />
                <span>Search for notes sent to you</span>
              </button>
            )}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <PenLine className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-comic font-bold text-gray-800 mb-3">Share Your Feelings</h2>
              <p className="text-gray-600 mb-6 font-comic">
                Send an anonymous love note to someone special. Let them know they're on your mind, without revealing who you are.
              </p>
              <a 
                href="/post" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-comic font-medium py-2 px-6 rounded-md transition-colors"
              >
                Post a Note
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-2xl font-comic font-bold text-gray-800 mb-3">Discover Messages</h2>
              <p className="text-gray-600 mb-6 font-comic">
                Wonder if someone has sent you a secret message? Search by your name or email to find notes meant for you.
              </p>
              <a 
                href="/search" 
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-comic font-medium py-2 px-6 rounded-md transition-colors"
              >
                Search Notes
              </a>
            </div>
          </div>
          
          <div className="mt-16 p-6 bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-sm">
            <h2 className="text-xl font-comic font-bold text-gray-800 mb-3">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <span className="font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Post a Note</h3>
                </div>
                <p className="text-gray-600 text-sm font-comic">
                  Write an anonymous love note for someone special. Include their name and optionally their email.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <span className="font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Stay Anonymous</h3>
                </div>
                <p className="text-gray-600 text-sm font-comic">
                  Your identity is never revealed. We only collect minimal information to prevent spam.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center mr-2">
                    <span className="font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800">Find Messages</h3>
                </div>
                <p className="text-gray-600 text-sm font-comic">
                  Search by name or email to discover notes meant for you. Emails are never publicly displayed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
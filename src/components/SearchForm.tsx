import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchFormProps {
  onSearch: (name?: string, email?: string) => void;
  isInline?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isInline = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [searchBy, setSearchBy] = useState<'name' | 'email'>('name');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchBy === 'name' && name) {
      onSearch(name, undefined);
    } else if (searchBy === 'email' && email) {
      onSearch(undefined, email);
    }
  };

  if (isInline) {
    return (
      <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            value={searchBy === 'name' ? name : email}
            onChange={(e) => searchBy === 'name' ? setName(e.target.value) : setEmail(e.target.value)}
            placeholder={searchBy === 'name' ? "Enter a name..." : "Enter an email..."}
            className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
            required
          />
          <button
            type="button"
            onClick={() => setSearchBy(searchBy === 'name' ? 'email' : 'name')}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-primary-600 hover:text-primary-800 font-comic"
          >
            {searchBy === 'name' ? 'Use Email' : 'Use Name'}
          </button>
        </div>
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white font-comic font-medium py-2 px-4 rounded-r-lg transition-colors flex items-center"
        >
          <Search className="w-4 h-4 mr-1" />
          Search
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto w-full">
      <div className="mb-6">
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="searchBy"
              checked={searchBy === 'name'}
              onChange={() => setSearchBy('name')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-gray-700 font-comic">Search by Name</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="searchBy"
              checked={searchBy === 'email'}
              onChange={() => setSearchBy('email')}
              className="h-4 w-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-gray-700 font-comic">Search by Email</span>
          </label>
        </div>

        {searchBy === 'name' ? (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 font-comic">
              Recipient's Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
              required
            />
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-comic">
              Recipient's Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter an email..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-comic"
              required
            />
            <p className="mt-1 text-xs text-gray-500 font-comic">
              More accurate: notes sent directly to this email
            </p>
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-comic font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
      >
        <Search className="w-5 h-5 mr-2" />
        Find Love Notes
      </button>
    </form>
  );
};

export default SearchForm;
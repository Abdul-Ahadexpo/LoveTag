import React from 'react';
import { Heart, Database, Shield, Code, FileText, User } from 'lucide-react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex justify-center mb-4">
          <Heart className="h-8 w-8 text-primary-500 bounce-in" fill="#f9a8d4" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-script bounce-in">
          About LoveTag
        </h1>
        <p className="text-center text-gray-600 mb-8 font-comic italic max-w-2xl mx-auto">
          "Everything you need to know about how LoveTag works, from the ground up."
        </p>

        <div className="space-y-8">
          {/* Creator Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Creator</h2>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <p className="text-lg font-comic text-gray-700 text-center">
                <strong>Created and Developed by Nazuu</strong>
              </p>
              <p className="text-gray-600 font-comic text-center mt-2">
                Designed with love to help people share anonymous feelings safely and beautifully.
              </p>
            </div>
          </div>

          {/* Project Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <Heart className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Project Overview</h2>
            </div>
            <p className="text-gray-700 font-comic mb-4">
              LoveTag is an anonymous love note sharing platform where people can send heartfelt messages 
              without revealing their identity. The platform focuses on privacy, simplicity, and creating 
              meaningful connections through anonymous expressions of love and appreciation.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="text-sm text-gray-600 font-comic space-y-1">
                  <li>• Anonymous message posting</li>
                  <li>• Search by name or email</li>
                  <li>• One message per day limit</li>
                  <li>• Mobile-responsive design</li>
                  <li>• Real-time database</li>
                </ul>
              </div>
              <div className="bg-secondary-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-gray-800 mb-2">Privacy First</h3>
                <ul className="text-sm text-gray-600 font-comic space-y-1">
                  <li>• No user accounts required</li>
                  <li>• Emails never displayed publicly</li>
                  <li>• IP tracking only for spam prevention</li>
                  <li>• No personal data collection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Architecture */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Technical Architecture</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-comic font-semibold text-gray-800 mb-3">Frontend Stack</h3>
                <div className="space-y-2 text-sm font-comic">
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>React 18.3.1</strong> - Modern UI library with hooks
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>TypeScript</strong> - Type-safe JavaScript development
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>Vite</strong> - Fast build tool and dev server
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>Tailwind CSS</strong> - Utility-first CSS framework
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <strong>Lucide React</strong> - Beautiful icon library
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-comic font-semibold text-gray-800 mb-3">Backend & Database</h3>
                <div className="space-y-2 text-sm font-comic">
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Firebase Realtime Database</strong> - NoSQL real-time database
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>Firebase Hosting</strong> - Fast, secure web hosting
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>IPify API</strong> - IP address detection for spam prevention
                  </div>
                  <div className="bg-green-50 p-2 rounded">
                    <strong>React Hot Toast</strong> - Beautiful notifications
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* File Structure */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Project File Structure</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm font-mono text-gray-700">
{`src/
├── components/           # Reusable UI components
│   ├── Layout.tsx       # Main layout wrapper with navigation
│   ├── NoteCard.tsx     # Individual note display component
│   ├── SearchForm.tsx   # Search functionality component
│   └── FloatingParticles.tsx # Animated background particles
├── pages/               # Main application pages
│   ├── HomePage.tsx     # Landing page with overview
│   ├── PostPage.tsx     # Create new love notes
│   ├── SearchPage.tsx   # Search for existing notes
│   └── AboutPage.tsx    # This documentation page
├── hooks/               # Custom React hooks
│   └── useNotes.ts      # Firebase database operations
├── firebase/            # Firebase configuration
│   └── config.ts        # Database connection setup
├── types/               # TypeScript type definitions
│   └── index.ts         # LoveNote and SearchParams interfaces
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and animations`}
              </pre>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">How It Works</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-300 pl-4">
                <h3 className="font-comic font-semibold text-gray-800">1. Posting a Note</h3>
                <p className="text-gray-600 font-comic text-sm">
                  User fills out recipient name, optional email, and message. System checks IP address 
                  against daily submission limit, then stores the note in Firebase with timestamp.
                </p>
              </div>
              <div className="border-l-4 border-secondary-300 pl-4">
                <h3 className="font-comic font-semibold text-gray-800">2. Spam Prevention</h3>
                <p className="text-gray-600 font-comic text-sm">
                  Each IP address can only submit one note per day. IP addresses are hashed and stored 
                  with timestamps to enforce this limit without compromising privacy.
                </p>
              </div>
              <div className="border-l-4 border-accent-300 pl-4">
                <h3 className="font-comic font-semibold text-gray-800">3. Searching Notes</h3>
                <p className="text-gray-600 font-comic text-sm">
                  Users can search by name (partial match) or email (exact match). Email searches are 
                  more accurate but emails are never displayed publicly for privacy.
                </p>
              </div>
              <div className="border-l-4 border-primary-300 pl-4">
                <h3 className="font-comic font-semibold text-gray-800">4. Data Display</h3>
                <p className="text-gray-600 font-comic text-sm">
                  Found notes are displayed with recipient name, message, and date. Sender identity 
                  remains completely anonymous throughout the entire process.
                </p>
              </div>
            </div>
          </div>

          {/* Database Schema */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Database Schema</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-gray-800 mb-2">Notes Collection</h3>
                <div className="text-sm font-comic space-y-1">
                  <div><strong>id:</strong> string (auto-generated)</div>
                  <div><strong>recipientName:</strong> string (required)</div>
                  <div><strong>recipientEmail:</strong> string (optional)</div>
                  <div><strong>message:</strong> string (required, max 500 chars)</div>
                  <div><strong>createdAt:</strong> number (timestamp)</div>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-gray-800 mb-2">Submissions Collection</h3>
                <div className="text-sm font-comic space-y-1">
                  <div><strong>id:</strong> string (auto-generated)</div>
                  <div><strong>ip:</strong> string (hashed IP address)</div>
                  <div><strong>timestamp:</strong> number (submission time)</div>
                </div>
                <p className="text-xs text-gray-500 font-comic mt-2">
                  Used only for daily limit enforcement
                </p>
              </div>
            </div>
          </div>

          {/* Security & Privacy */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-primary-100">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-primary-600 mr-2" />
              <h2 className="text-2xl font-comic font-bold text-gray-800">Security & Privacy</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-green-800 mb-2">Data Protection</h3>
                <ul className="text-sm text-green-700 font-comic space-y-1">
                  <li>• No user accounts or passwords</li>
                  <li>• Emails never shown publicly</li>
                  <li>• No tracking cookies</li>
                  <li>• Minimal data collection</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-blue-800 mb-2">Anonymity</h3>
                <ul className="text-sm text-blue-700 font-comic space-y-1">
                  <li>• Sender identity never stored</li>
                  <li>• No login required</li>
                  <li>• IP only for spam prevention</li>
                  <li>• Messages can't be traced back</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h3 className="font-comic font-semibold text-purple-800 mb-2">Firebase Security</h3>
                <ul className="text-sm text-purple-700 font-comic space-y-1">
                  <li>• Encrypted data transmission</li>
                  <li>• Secure database rules</li>
                  <li>• Regular security updates</li>
                  <li>• Google's infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
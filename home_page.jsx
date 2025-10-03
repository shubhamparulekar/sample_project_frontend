import React from 'react';
import { BookOpen, Search, Brain, Tag, Users, FileText, Zap, Globe } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PaperSnap</h1>
                <p className="text-sm text-gray-600">AI-powered research paper analysis</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#methodology" className="text-gray-700 hover:text-blue-600 font-medium">Methodology</a>
              <a href="#data" className="text-gray-700 hover:text-blue-600 font-medium">Data</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Transform Research Papers into Clear Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Reading research papers should feel like learning, not deciphering dense prose. PaperSnap turns complex academic papers into digestible summaries, plain-language explanations, and organized knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              Try PaperSnap
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Functionality</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our end-to-end pipeline transforms research papers into actionable insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Summarization</h4>
              <p className="text-gray-600">Transformer-based abstractive summaries that capture key insights while outperforming extractive baselines.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 hover:shadow-md transition-shadow">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">ELI5 Simplification</h4>
              <p className="text-gray-600">Plain-language explanations that make complex concepts accessible to non-experts while preserving core facts.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-md transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Tag className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Auto Glossary</h4>
              <p className="text-gray-600">Automatic extraction of key technical terms with context-grounded definitions from the paper itself.</p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 hover:shadow-md transition-shadow">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Paper Organization</h4>
              <p className="text-gray-600">Find similar papers, cluster by topic, and classify into categories using advanced NLP methods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Combining state-of-the-art NLP techniques with thoughtful preprocessing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Preprocessing Pipeline</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Brain className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Extract text and separate section headers</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Brain className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Clean equations, figure captions, and boilerplate text</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Brain className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Segment into sections, paragraphs, and sentences</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mt-1 mr-3">
                    <Brain className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Tokenize with intelligent handling of acronyms and technical terms</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">NLP Methods</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <Search className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Transformer-based abstractive summarization vs. TextRank baseline</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <Search className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Controlled rewriting for ELI5 simplification with vocabulary constraints</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <Search className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Noun phrase mining and sequence labeling for glossary extraction</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mt-1 mr-3">
                    <Search className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">TF-IDF and transformer embeddings for similarity, clustering, and classification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section id="data" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Data Sources</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We source exclusively from arXiv's Computer Science and AI collections
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-blue-600 mr-3" />
              <h4 className="text-2xl font-bold text-gray-900">arXiv CS/AI Dataset</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-semibold text-gray-900 mb-2">CS Archive</h5>
                  <p className="text-gray-600 text-sm">Topic-based sampling for diverse coverage</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-semibold text-gray-900 mb-2">arXiv Homepage</h5>
                  <p className="text-gray-600 text-sm">Paper discovery and metadata collection</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h5 className="font-semibold text-gray-900 mb-2">Public API</h5>
                  <p className="text-gray-600 text-sm">Automated PDF and metadata retrieval</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-700 font-medium mb-4">Sample Papers:</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <a href="https://arxiv.org/html/2509.15239v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">2509.15239v1</a>
                <a href="https://arxiv.org/html/2509.15292v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">2509.15292v1</a>
                <a href="https://arxiv.org/html/2509.15336v1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">2509.15336v1</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">PaperSnap</span>
            </div>
            <p className="text-gray-400 mb-6">
              Making research accessible through AI-powered paper analysis
            </p>
            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-500 text-sm">
                © 2024 PaperSnap. Built with modern NLP and a passion for accessible science.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
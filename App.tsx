import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import ModuleGrid from './components/ModuleGrid';
import Modal from './components/Modal';
import { ReceivingModule } from './types';
import { RECEIVING_MODULES } from './constants';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [selectedModule, setSelectedModule] = useState<ReceivingModule | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSelectModule = (module: ReceivingModule) => {
        setSelectedModule(module);
    };

    const handleCloseModal = () => {
        setSelectedModule(null);
    };

    const filteredModules = useMemo(() => {
        if (!searchQuery) {
            return RECEIVING_MODULES;
        }
        const lowercasedQuery = searchQuery.toLowerCase();
        return RECEIVING_MODULES.filter(module =>
            module.title.toLowerCase().includes(lowercasedQuery) ||
            module.description.toLowerCase().includes(lowercasedQuery)
        );
    }, [searchQuery]);

    return (
        <div className="bg-gray-900 min-h-screen flex flex-col">
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Training Modules
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                        Select a module to begin your training on warehouse receiving procedures.
                    </p>
                </div>
                <ModuleGrid 
                    modules={filteredModules} 
                    onSelectModule={handleSelectModule}
                />
            </main>
            <Footer />
            {selectedModule && <Modal module={selectedModule} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;
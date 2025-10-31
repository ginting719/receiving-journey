import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="border-t border-gray-700/50 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2024 Warehouse Operations Inc. All rights reserved. | Training Hub</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
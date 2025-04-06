import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext'

const AboutPage = () => {
    const context = useContext(myContext)
    const { mode } = context
  return (
    <Layout>
        <div className=" min-h-screen py-8 px-4 sm:px-6 lg:px-8" style={{ color: mode === 'dark' ? 'white' : '' }}>
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-8">About BookHub</h1>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                BookHub was founded with a passion for literature and a vision to make books accessible to everyone. We believe in the power of books to transform lives and bring people together. Our online bookstore offers a vast collection of books across various genres, from timeless classics to contemporary bestsellers, ensuring there's something for every reader.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                At BookHub, our mission is to foster a love for reading by providing a seamless and enjoyable book shopping experience. We aim to connect readers with their next favorite book while supporting authors and publishers in bringing quality literature to the world.
            </p>
            </div>

            <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                - A vast collection of books across all genres<br/>
                - Competitive prices and regular discounts<br/>
                - Fast and reliable delivery service<br/>
                - Secure payment options<br/>
                - Excellent customer support
            </p>
            </div>
        </div>
        </div>
    </Layout>
  );
}

export default AboutPage;

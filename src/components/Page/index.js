import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/main.scss';

export default function Page(props) {
    return (
        <div>
            <Header />
            { props.children }
            <Footer />
        </div>
    )
}
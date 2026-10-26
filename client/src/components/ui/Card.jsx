import React from 'react';
export default function Card({ children, className = '', ...props }) { return <section className={`studio-card ${className}`} {...props}>{children}</section>; }

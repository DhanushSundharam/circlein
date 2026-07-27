import React from 'react';
import logoImg from '../assets/logo_transparent.png';

const Logo = ({ size = 32, className = '' }) => (
  <img 
    src={logoImg} 
    alt="CircleIn Logo" 
    width={size} 
    height={size} 
    className={className}
    style={{ flexShrink: 0, minWidth: size, minHeight: size, objectFit: 'contain' }}
  />
);

export default Logo;


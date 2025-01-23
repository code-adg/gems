import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export function TeamMemberCard({ name, role, image, bio, linkedin }: TeamMemberProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl mb-2">
        <img 
          src={image} 
          alt={name}
          className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-2 left-2 right-2 text-white">
            <div className="flex gap-2">
              <a 
                href={linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1.5 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${name.toLowerCase().replace(' ', '.')}@greenfusion.com`}
                className="p-1.5 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-sm text-center font-bold mb-0.5 text-white">{name}</h3>
      <p className="text-emerald-400 text-center text-xs font-medium mb-1">{role}</p>
      <p className="text-gray-400 text-center text-xs">{bio}</p>
    </div>
  );
}
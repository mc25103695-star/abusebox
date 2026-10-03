import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { HiShieldCheck, HiExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-slate-950/80 backdrop-blur-md text-slate-400 text-sm mt-16'>
      <div className='max-w-6xl mx-auto px-4 py-10'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Brand & Tagline */}
          <div className='flex items-center gap-3 text-left'>
            <img src="/logo.png" alt="AbuseBox" className='h-8 w-8 rounded-lg object-cover' />
            <div>
              <p className='text-white font-semibold flex items-center gap-2'>
                AbuseBox <span className='text-xs font-normal px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'>v1.1.2</span>
              </p>
              <p className='text-xs text-slate-400 mt-0.5'>
                Open-source threat monitoring toolkit for IPs, domains, and servers.
              </p>
            </div>
          </div>

          {/* Developer attribution & Links */}
          <div className='flex flex-wrap items-center justify-center gap-6'>
            <div className='text-center md:text-right'>
              <p className='text-xs text-slate-400'>Developed & Maintained by</p>
              <a
                href='https://github.com/mc25103695-star'
                target='_blank'
                rel='noreferrer'
                className='text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1'
              >
                Omkar Kharat <HiExternalLink className='text-xs' />
              </a>
            </div>

            <a
              href='https://github.com/mc25103695-star/abusebox'
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 transition-colors text-xs font-medium'
            >
              <AiFillGithub className='text-base' />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500'>
          <p>© 2026 Omkar Kharat. Released under the MIT License.</p>
          <div className='flex items-center gap-5'>
            <Link to='/' className='hover:text-slate-300 transition-colors'>Home</Link>
            <Link to='/quick-check' className='hover:text-slate-300 transition-colors'>Quick Check</Link>
            <Link to='/dashboard' className='hover:text-slate-300 transition-colors'>Dashboard</Link>
            <a
              href='https://github.com/mc25103695-star/abusebox'
              target='_blank'
              rel='noreferrer'
              className='hover:text-slate-300 transition-colors'
            >
              Repository
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

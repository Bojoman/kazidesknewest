'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Search, X } from 'lucide-react';

export default function SupportWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-rose-800 px-4 py-2 text-[#F1B59E] shadow-lg hover:bg-rose-900 transition"
      >
        <MessageCircle className="h-5 w-5 text-[#F1B59E]" />
        Support
      </button>

      {open && (
        <div className="absolute right-0 bottom-full mb-2 w-80 rounded-lg border bg-white shadow-2xl z-50">
          <div className="flex items-center justify-center bg-rose-800 px-4 py-2 rounded-t-lg">
            <h3 className="text-[#F1B59E] text-lg font-semibold">Support</h3>
            <button onClick={() => setOpen(false)}>
              {/* <X className="h-5 w-5 text-white" /> */}
            </button>
          </div>
          <div className="p-4">
            <div className="relative flex items-center rounded-md border border-gray-200 bg-gray-50">
              <Search className="ml-2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full bg-transparent px-3 py-2 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

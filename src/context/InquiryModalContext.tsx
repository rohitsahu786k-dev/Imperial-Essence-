"use client";

import React, { createContext, useContext, useState } from "react";

interface InquiryModalContextType {
  isOpen: boolean;
  selectedCategory: string | null;
  selectedImage: string | null;
  openInquiryModal: (category?: string, image?: string) => void;
  closeInquiryModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openInquiryModal = (category?: string, image?: string) => {
    setSelectedCategory(category || null);
    setSelectedImage(image || null);
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        selectedCategory,
        selectedImage,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error("useInquiryModal must be used within an InquiryModalProvider");
  }
  return context;
}

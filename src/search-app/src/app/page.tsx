'use client';
import SearchResults from "@/components/SearchResults";
import SearchBar from "@/components/searchBar";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {

  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  function performSearch(term: string) {
    // Perform search logic here using the searchTerm
    setisLoading(true);
    setSearchTerm(term);
  }

  useEffect(() => { 

    if (searchTerm === '') return;

    fetch(`http://localhost:3000/search?text=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => { setisLoading(false);setSearchResults(data);  })
  } , [searchTerm]);

  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5 grow-0">Semantic Search Demo</h1>
      <SearchBar onSearch={performSearch} />
      <SearchResults results={searchResults} isLoading={isLoading} />
    </main>
  );
}

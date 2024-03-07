import React, { Key } from 'react';

const SearchResults = (props:any ) => {

    if (props?.results.length === 0) {
        return null;
    }

    return (
        
        <div className={(props.isLoading ? 'blur ' : '') + 'rounded-md border-zinc-100/50 w-3/4 border border-solid p-5 grow mt-5 divide-dotted divide-white divide-y'}>
            {props.results?.map((result:any, index:Key) => (
                <div key={index} title={"cosine similarity : " + result.cosine_similarity} >
                    <p className='mt-3 mb-3'>{result.text}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;  
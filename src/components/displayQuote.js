import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function DisplayQuote() {
    const [myQuote, setMyQuote] = useState('');
    const [quoteLoading, setQuoteLoading] = useState(true);
    const [quoteError, setQuoteError] = useState(null);

    

  return (
    <div>DisplayQuote</div>
  )
}

export default DisplayQuote
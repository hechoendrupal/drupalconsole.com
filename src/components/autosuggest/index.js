import React, { useState } from "react"
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match';
import AutosuggestHighlightParse from 'autosuggest-highlight/parse';
import './style.css';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, commands) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  // return commands.filter(command => regex.test(command.name));

  // @TODO read namespaces from commands.json
  const namespaces = [
    { name: 'cache' },
    { name: 'config' },
    { name: 'create' },
    { name: 'cron' },
    { name: 'database' },
    { name: 'debug' },
    { name: 'devel' },
    { name: 'docker' },
    { name: 'dotenv' },
    { name: 'entity' },
    { name: 'features' },
    { name: 'fields' },
    { name: 'generate' },
    { name: 'image' },
    { name: 'locale' },
    { name: 'migrate' },
    { name: 'module' },
    { name: 'multisite' },
    { name: 'node' },
    { name: 'queue' },
    { name: 'rest' },
    { name: 'role' },
    { name: 'router' },
    { name: 'site' },
    { name: 'state' },
    { name: 'taxonomy' },
    { name: 'theme' },
    { name: 'update' },
    { name: 'user' },
    { name: 'views' },
  ];

  return namespaces.concat(commands).filter(command => regex.test(command.name));
}

const getSuggestionValue= suggestion =>  suggestion.name

function renderSuggestion(suggestion, { query }) {
  const matches = AutosuggestHighlightMatch(suggestion.name, query);
  const parts = AutosuggestHighlightParse(suggestion.name, matches);

  return (
    <span>
      {parts.map((part, index) => {
        const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;

        return (
          <span className={className} key={index}>
            {part.text}
          </span>
        );
      })}
    </span>
  );
}


const AutosuggestComponent = ({ commands, setSearch }) => {
  const [value, setValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  if(!value){
    setSearch("")
  }

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'Search DrupalConsole Commands',
    value,
    onChange: (e, { newValue }) => setValue(newValue)
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={(e) => setSuggestions(getSuggestions(e.value, commands)) }
      onSuggestionsClearRequested={() => setSuggestions([])}
      onSuggestionSelected={(e, { suggestion }) => setSearch(suggestion.name)}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  )
}

export default AutosuggestComponent;

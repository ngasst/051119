import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: salmon;
    width: 500px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
`;

const Display = styled.div`
    color: darkred;
    font-weight: 700;
    font-size: 14px;
`

function App() {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const input = inputRef.current;
        input.addEventListener('input', handleChange);
        return function clean() {
            input.removeEventListener('input', handleChange)
        }
    }, [value]);

    function handleChange(e) {
        const withStars = e.target.value;
        const withoutStars = withStars.split('').filter(c => c !== '*').join('');
        setValue(withoutStars)
    }
    
  return (
    <Wrapper>
        <Display>
            {value}
        </Display>
      <input ref={inputRef} />
      {/* <input onChange={event => handleChange(event)} value={value}/> */}
    </Wrapper>
  );
}

export default App;

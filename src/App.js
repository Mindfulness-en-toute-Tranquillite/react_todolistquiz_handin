import React, { useState } from 'react'
import './App.css';


function App() {

const [content, setContent] = useState('');

const [squres, setSqures] = useState(
  [{ id:0, content: 'react를 배워봅시다.'}]
)
//input박스
const contentChangeHandler = (event) => {
  setContent(event.target.value);
}

//추가하기버튼
const clickButtonHandler = () => {
  const newSqures = {
    id: squres.length + 1,
    content,
  };
  setSqures([...squres, newSqures])
  setContent('');
};

  return (
    <div>
      <div className='addingline_style'>
        <input type="text"
        placeholder='내용을 입력해주세요'
        value={content}
        onChange={contentChangeHandler}
        />

        <button
        onClick={clickButtonHandler}>
          추가하기
          </button>
      </div>

      <div className='titleline_style'>
        Todo List
      </div>

      <div className='squreboxline_style'>
        {
          squres.map((item) => {
            return (
              <div className='squres_style' key={item}>
                {item.content}
              </div>
            )

          }
          )
        }
      </div>
    </div>
  )
}

export default App
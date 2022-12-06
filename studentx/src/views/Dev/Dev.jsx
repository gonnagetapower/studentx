import React from 'react';
import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';

import { Navigation, Task } from '../../components';

const Dev = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      axios
        .get(
          `https://635c0281fc2595be263e82f3.mockapi.io/tasks?page=${currentPage}&limit=5`,
        )
        .then((response) => {
          setTasks([...tasks, ...response.data]);
          setCurrentPage((prevPage) => prevPage + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      currentPage < 5
    ) {
      setFetching(true);
    }
  };

  return (
    <div className="content-container">
      <div className="content">
        {tasks.map((obj) => (
          <Task
            key={obj.id}
            title={obj.title}
            descr={obj.description}
            dateOrder={obj.orderDate}
            price={obj.price}
            id={obj.id}
          />
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Dev;

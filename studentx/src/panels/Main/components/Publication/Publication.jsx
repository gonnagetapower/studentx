import React, { useEffect } from 'react';

import { PullToRefresh, Snackbar } from '@vkontakte/vkui';
import { Task, AddButton, SkeletonCard, EmptyTask } from '../../../../components';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTasks,
  setCurrentPage,
  setRefreshStatus,
} from './../../../../redux/slices/taskSlice';
import { useRouter } from '@happysanta/router';
import { PAGE_CREATE } from '../../../../router';

const Publication = ({ Snackbar, setSnackBar }) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const tasksData = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);
  const currentPage = useSelector((state) => state.tasks.currentPage);
  const firstFetch = useSelector((state) => state.tasks.firstFetch);
  const refreshStatus = useSelector((state) => state.tasks.refreshStatus);

  const discipline = useSelector((state) => state.filter.discipline);
  const institute = useSelector((state) => state.filter.institute);

  const disciplineQuery = discipline ? `category=${discipline}&` : '';
  const instituteQuery = institute ? `university=${institute}&` : '';

  const getTasks = async () => {
    try {
      await dispatch(
        fetchTasks({ currentPage, disciplineQuery, instituteQuery }),
      ).unwrap();
    } catch (err) {
      setSnackBar(
        <Snackbar
          before={<Icon28CancelCircleFillRed />}
          layout="vertical"
          duration={900}
          onClose={() => setSnackBar(null)}>
          Ошибка сервера
        </Snackbar>,
      );
    }
  };

  useEffect(() => {
    if (currentPage < 40) {
      getTasks();
    }
  }, [currentPage, discipline, institute]);

  useEffect(() => {
    console.log(localStorage.getItem('tokenAccess'));
    console.log(localStorage.getItem('tokenRefresh'));
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      dispatch(setCurrentPage());
    }
  };

  const onRefresh = async () => {
    try {
      dispatch(setRefreshStatus(true));
      await dispatch(fetchTasks(currentPage)).unwrap();
      dispatch(setRefreshStatus(false));
    } catch (err) {
      console.log(err);
      setTimeout(() => dispatch(setRefreshStatus(false)), 2000);
      setTimeout(
        () =>
          setSnackBar(
            <Snackbar
              before={<Icon28CancelCircleFillRed />}
              layout="vertical"
              duration={1700}
              onClose={() => setSnackBar(null)}>
              Ошибка сервера
            </Snackbar>,
          ),
        1500,
      );
    }
  };

  if (tasksData.length === 0) {
    return <EmptyTask />;
  }

  return (
    <div className="content-container">
      <AddButton router={router} createPanel={PAGE_CREATE} />
      <div className="content">
        <PullToRefresh onRefresh={onRefresh} isFetching={refreshStatus}>
          {firstFetch
            ? [...new Array(6)].map((index) => <SkeletonCard key={index} />)
            : tasksData.map((obj, index) => (
                <Task
                  key={index}
                  title={obj.title}
                  descr={obj.description}
                  dateOrder={obj.orderDate}
                  price={obj.price}
                  id={obj.id}
                />
              ))}
          {status === 'loading' ? (
            <div>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : null}
        </PullToRefresh>
      </div>
    </div>
  );
};

export default Publication;

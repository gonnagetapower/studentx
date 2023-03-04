import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import './SkeletonCard.css'

const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#E7E7E7" highlightColor="#B9B9B9">
      <div className="content-item">
        <div className='task'>
          <h1 className="content-item__title skeleton__title">
            <Skeleton width={1730} height={21} />
          </h1>
          <p className="content-item__descr skeleton__descr">
            <Skeleton width={3000} height={55} />
          </p>
          <div className="content-info">
            <p className="content-info__date">
              <Skeleton width={120} height={20} />
            </p>
            <p className="content-info__price">
              <Skeleton width={40} height={20} />
            </p>
            {/* <p className="content-info__price">
              <Skeleton width={70} height={20} />
            </p> */}
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;

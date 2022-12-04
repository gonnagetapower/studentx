import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <SkeletonTheme baseColor="#E7E7E7" highlightColor="#B9B9B9">
      <div className="content-item">
        <h1 className="content-item__title">
          <Skeleton width={173} height={21} />
        </h1>
        <p className="content-item__descr">
          <Skeleton width={300} height={55} />
        </p>
        <div className="content-info">
          <p className="content-info__date">
            <Skeleton width={120} height={20} />
          </p>
          <p className="content-info__price">
            <Skeleton width={40} height={20} />
          </p>
          <p className="content-info__price">
            <Skeleton width={70} height={20} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCard;

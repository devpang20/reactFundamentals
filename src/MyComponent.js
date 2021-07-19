import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
            <div>
                나의 새롭고 멋진 컴포넌트 제 이름은 {name} 입니다  <br /> children 값은 {children} <br/> 제가 좋아하는 숫자는 {favoriteNumber}입니다;
            </div>
    );
};

MyComponent.defauiltProps = {
    name: '기본 이름'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;
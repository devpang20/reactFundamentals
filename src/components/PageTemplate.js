import react from 'react';

const PageTemplate = ({children}) => {
    return (
        <div>
            <h1>일정 관리</h1>
            <div>
                {children}
            </div>
        </div>
    );
}

export default PageTemplate;
import React, { memo } from 'react';

const HabitAddForm = memo(props => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        //이렇게 해도 됨! this.inputRef.current.value = '';
        // 정석대로 한다면 이렇게
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef} 
                className="add-input" 
                type="text" 
                placeholder="Habit"
            />
            <button className="default-button add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
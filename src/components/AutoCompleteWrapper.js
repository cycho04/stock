import React from 'react';
import Autocomplete from 'react-autocomplete';

const AutoCompleteWrapper = props => {
    console.log(props.formProps)
    return(
        <Autocomplete
            getItemValue={(item) => item.label}
            items={[
            { label: 'apple' },
            { label: 'banana' },
            { label: 'pear' }
            ]}
            renderItem={(item, isHighlighted) =>
                <div key={item.label} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.label}
                </div>
            }
            {...props.formProps.input}
            placeholder='Search Stocks'
            menuStyle={ {'position': 'relative !important'} }
            isItemSelectable={() => true}
            onSelect={(value) => console.log(value)}
        />
    )
}
export default AutoCompleteWrapper;
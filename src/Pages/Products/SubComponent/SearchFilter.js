import React, { useEffect, useState } from 'react';


const DEFULT_FILTER = "title";

function SearchFilter(props) {
    const [searchText, setSearchText] = useState('');
    const [filterBy, setFilterBy] = useState(DEFULT_FILTER);

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         searchText: "",
    //         filterBy: DEFULT_FILTER
    //     }
    // }

    function onSearchTextChanged(e) {

        // await this.setState({
        //     searchText: e.target.value
        // })

        setSearchText(e.target.value);


    }

    function onFilterSelected(e) {
        // await this.setState({
        //     filterBy: e.target.value
        // })

        setFilterBy(e.target.value);

               
    }

    useEffect(() => {
        if ('onChange' in props) {
            props.onChange(searchText, filterBy);
        } 
    }, [filterBy, searchText])

    function onResetForm(e) {
        e.preventDefault();
        // this.setState({
        //     searchText: "",
        //     filterBy: DEFULT_FILTER
        // })

        setSearchText('')
        setFilterBy(DEFULT_FILTER);
    }


        return (
            <div className='row ms-5 mt-3'>
                <form onSubmit={onResetForm}>
                    <div className="col-lg-7 col-md-10">
                        <div className=' d-flex'>
                            <div className='me-2 flex-grow-1'>
                                <input
                                    value={searchText}
                                    onChange={onSearchTextChanged}
                                    className='form-control'
                                    type="text"
                                    placeholder='Search ...' />
                            </div>

                            <div className='me-2 flex-grow-2'>
                                <select
                                    className='form-select'
                                    onChange={onFilterSelected}
                                    value={filterBy}
                                >
                                    <option value="title">By Title</option>
                                    <option value="desc">By Description</option>
                                    <option value="titleAndDesc">By Title/Desc</option>
                                </select>
                            </div>

                            <div className='flex-grow-2'>
                                <button className='btn btn-secondary'>Reset</button>
                            </div>
                        </div>


                    </div>

                </form>
            </div>
        )
}

export default SearchFilter;
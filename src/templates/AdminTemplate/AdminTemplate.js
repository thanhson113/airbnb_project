import React from 'react'
import { Route } from 'react-router-dom'
export default function AdminTemplate(props) {
    return (
        <Route exact path={props.path} render={
            (propsRouter) => {
                return (
                    <>
                        <props.component  {...propsRouter} />
                    </>
                )
            }
        }
        />
    )
}
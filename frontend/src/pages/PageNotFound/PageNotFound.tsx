import { Button, Result } from 'antd'
import Dashboard from 'components/Dashboard/Dashboard'
import React from 'react'

const PageNotFound = () => {
    return (
        <Dashboard>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        </Dashboard>
    )
}

export default PageNotFound


import React from 'react';
import { NextPage } from 'next';
import { resetServerContext } from 'react-beautiful-dnd';
import { useRouter } from 'next/router';
import { FormDesigner, FormProvider, ShaApplicationProvider } from '@shesha/reactjs';
import AuthContainer from '../../components/authedContainer';

interface IDesignerPageProps { }

const backendUrl = 'http://localhost:21021';

const DesignerPage: NextPage<IDesignerPageProps> = () => {
    const router = useRouter();
    //const { path } = router.query;
    const id = 'B39E3D0E-4AC7-424C-BDB0-7E0F9F039489';

    return (
        <ShaApplicationProvider backendUrl={backendUrl}>
            <AuthContainer layout={true}>
                <FormProvider id={id as string} mode="designer">
                    <FormDesigner></FormDesigner>
                </FormProvider>
            </AuthContainer>
        </ShaApplicationProvider>
    );
};

DesignerPage.getInitialProps = async (_ctx) => {
    resetServerContext();

    return {};
};

export default DesignerPage;

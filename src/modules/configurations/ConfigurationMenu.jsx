import React, {Suspense} from 'react';
import { useTranslation } from 'react-i18next';

//components
import ModuleContainer from '../../components/module-container/ModuleContainer';
import MachineType from './pages/machine-type/MachineType';
import MachineModel from './pages/machine-model/MachineModel';
import MachineUnit from './pages/machine-units/MachineUnit';
import MachineUnitCategory from './pages/machine-units-category/MachineUnitCategory';
import MachineFleet from './pages/machine-fleet/MachineFleet';

import MateusComponent from './pages/MateusComponent';
import ComingSoon from './pages/ComingSoon';

export default ({match}) => (
    <Suspense fallback="loading">
        <ConfigurationMenu {...match} />
    </Suspense>
)
function ConfigurationMenu(match) {
    const { t } = useTranslation();
    const menu = Menu(match);
    return (
        <ModuleContainer
            title={t('modules.configurationTitle')}
            showBrand
            showMenu
            opened
            menu={menu} />
    );
}

function Menu(match) {
    return [
        {
            group: "Machine",
            order: 0,
            items: [
                {
                    key: "Machine",
                    order: 97,
                    path: `${match.url}/machine`,
                    mdiIcon: "plus",
                    component: ComingSoon
                },
                {
                    key: "Type",
                    order: 97,
                    path: `${match.url}/machine-type`,
                    component: MachineType,
                    mdiIcon: "plus",
                },
                {
                    key: "Model",
                    order: 97,
                    path: `${match.url}/machine-model`,
                    mdiIcon: "plus",
                    component: MachineModel,
                },
                {
                    key: "Fleet",
                    order: 97,
                    path: `${match.url}/machine-fleet`,
                    mdiIcon: "plus",
                    component: MachineFleet
                },
                {
                    key: "Units",
                    order: 97,
                    path: `${match.url}/machine-units`,
                    mdiIcon: "plus",
                    component: MachineUnit
                },
                {
                    key: "Unit Category",
                    order: 97,
                    path: `${match.url}/machine-units-category`,
                    mdiIcon: "plus",
                    component: MachineUnitCategory
                },
            ]
        },
        // {
        //     group: "Telemetry",
        //     order: 99,
        //     items: [
        //         {
        //             key: "Sensor",
        //             order: 97,
        //             path: `${match.url}/sensor`,
        //             mdiIcon: "plus",
        //         },
        //         {
        //             key: "Alarm",
        //             order: 97,
        //             path: `${match.url}/alarm`,
        //             mdiIcon: "plus",
        //         },
        //     ]
        // },
        {
            group: "Mateus",
            order: 99,
            items: [
                {
                    key: "We love Newtrax",
                    order: 97,
                    path: `${match.url}/new-platform`,
                    mdiIcon: "plus",
                    component: MateusComponent
                }
            ]
        }
    ];
}
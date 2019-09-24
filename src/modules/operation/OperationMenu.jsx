import React, {Suspense} from 'react';
import { useTranslation } from 'react-i18next';

//components
import ModuleContainer from '../../components/module-container/ModuleContainer';
import Map from './pages/Map';

export default ({match}) => (
    <Suspense fallback="loading">
        <OperationMenu {...match} />
    </Suspense>
)
function OperationMenu(match) {
    const { t } = useTranslation();
    const menu = Menu(match);
    return (
        <ModuleContainer
            title={t('modules.operationTitle')}
            showBrand
            showMenu
            opened
            menu={menu} />
    );
}

function Menu(match) {
    return [
        {
            group: "Operation",
            order: 0,
            items: [
                {
                    key: "Map",
                    order: 97,
                    path: `${match.url}/map`,
                    mdiIcon: "plus",
                    component: Map
                }
            ]
        }
    ];
}
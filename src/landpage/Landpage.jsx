import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import ButtonCard from '../components/button-card/ButtonCard';

import { Route, Switch } from 'react-router-dom';


//Components
import OperationSVG from '../components/icons/Operation.svg';
import AnalyticsSVG from '../components/icons/Analytics.svg';
import ConfigurationSVG from '../components/icons/Configuration.svg';
import SafetySVG from '../components/icons/Safety.svg';
import Navbar from '../components/navbar/Navbar';

import ConfigurationMenu from '../modules/configurations/ConfigurationMenu';
import OperationMenu from '../modules/operation/OperationMenu';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    pageBox: {
        display: 'flex',
        height: '100vh',
    }
}));

export default props => (
    <Suspense fallback="loading">
        <Landpage {...props} />
    </Suspense>
)

function Landpage(props) {
    const classes = useStyles();
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Navbar title="NEWTRAX" showBrand />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                className={classes.pageBox}
            >
                <Box>
                    <Grid
                        container
                        direction="row">
                        <ButtonCard
                            text={t('modules.operationTitle')}
                            icon={OperationSVG}
                            path="/operation"
                        />

                        <ButtonCard
                            text={t('modules.safetyTitle')}
                            icon={SafetySVG}
                            path="/safety"
                            disabled
                            tooltip="Coming soon"
                        />

                        <ButtonCard
                            text={t('modules.analyticsTitle')}
                            icon={AnalyticsSVG}
                            path="/analytics"
                            disabled
                            tooltip="Coming soon"
                        />

                        <ButtonCard
                            text={t('modules.configurationTitle')}
                            icon={ConfigurationSVG}
                            path="/configuration"
                        />
                    </Grid>
                </Box>
            </Grid>

            {/* <Switch>
                <Route path="/operation" component={ConfigurationMenu} />
                <Route path="/configuration" component={OperationMenu} />
            </Switch> */}

        </React.Fragment>);
}
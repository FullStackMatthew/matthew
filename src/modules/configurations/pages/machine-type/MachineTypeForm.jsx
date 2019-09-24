import React from 'react';
import { Formik, Form } from 'formik';

import {
    Button,
    Grid
}
    from '@material-ui/core';

import TextField from '@material-ui/core/TextField';
import { Translation } from 'react-i18next';

export default (props) => {

    let initialValues = { id: props.values.id, name: props.values.name };
    return (

        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                if (values.id) {

                    props.onUpdate({
                        variables: {
                            input: { ...values }
                        }
                    });
                } else {

                    props.onAdd({
                        variables: {
                            input: { ...values }
                        }
                    });
                }
            }}
            render={({
                values,
                errors,
                status,
                touched,
                handleBlur,
                isValid,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) =>

                <Form onSubmit={handleSubmit}>
                    <Translation>
                        {
                            (t) =>
                                <Grid
                                    container
                                    direction="column"
                                >
                                    <TextField
                                        name="name"
                                        label={t('Name')}
                                        fullWidth
                                        variant="outlined"
                                        helperText={touched.name ? errors.name : ""}
                                        error={Boolean(errors.name)}
                                        value={values.name}
                                        onChange={handleChange}

                                    />
                                    <Grid
                                        container
                                        direction="row"
                                        justify="flex-end">
                                        <Button type="submit" color="primary" variant="contained" className="action-button" disabled={!isValid}>
                                            {t('Save')}
                                        </Button>
                                        <Button onClick={props.onCancel} variant="contained" className="action-button" >
                                            {t('Cancel')}
                                        </Button>
                                    </Grid>
                                </Grid>
                        }
                    </Translation>

                </Form>
            }
        />
    )
}

// function InternalForm(props) {
//     const {
//         values: { name },
//         errors,
//         touched,
//         handleSubmit,
//         handleChange,
//         isValid,
//         setFieldTouched
//     } = props;

//     const change = (name, e) => {
//         e.persist();
//         handleChange(e);
//         setFieldTouched(name, true, false);
//     };

//     console.log(props.onCancel);

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Grid
//                 container
//                 direction="column"
//             >
//                 <TextField
//                     name="name"
//                     label="Name"
//                     fullWidth
//                     variant="outlined"
//                     helperText={touched.name ? errors.name : ""}
//                     error={Boolean(errors.name)}
//                     value={name}
//                     onChange={handleChange}

//                 />
//                 <Grid
//                     container
//                     direction="row"
//                     justify="flex-end">
//                     <Button type="submit" color="primary" variant="contained" className="action-button" disabled={!isValid}>
//                         Save
//                         {/* {t('Save')} */}
//                     </Button>
//                     <Button onClick={this.props.onCancel} variant="contained" className="action-button" >
//                         Cancel
//                         {/* {t('Cancel')} */}
//                     </Button>
//                 </Grid>
//             </Grid>
//         </Form>
//     );
// }
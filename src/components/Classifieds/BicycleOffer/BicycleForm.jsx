import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Paper,
  Button,
  Divider,
  Typography
} from "@material-ui/core";
import SelectForm from "../../../shared/forms/SelectForm";
import InputForm from "../../../shared/forms/InputForm";
import CheckboxForm from "../../../shared/forms/CheckboxForm";
import SelectDate from "../../../shared/forms/SelectDate";
import {
  offer,
  condition,
  adDuration,
  color
} from "../../../data/SharedAttributes";
import {
  category,
  manufacturers,
  frameType,
  exchange,
  brakes,
  extras,
  gears
} from "../../../data/bicycle/bicycle";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  },
  title: {
    paddingTop: 16
  }
}));

const BicycleForm = props => {
  const classes = useStyles();
  const { onSubmit, requiredInfos } = props;

  const [inputValues, setInputValues] = useState({
    variant: "",
    owners: "",
    price: "",
    frameSize: "",
    rimSize: "",
    description: "",
    youTube: "",
    password: "",
    userName: "",
    email: "",
    phone1: "",
    location: "",
    ...props.inputValues
  });

  const handleInputChange = event => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };

  const [selectValues, setSelectValues] = useState({
    offer: "",
    category: "",
    manufacturer: "",
    condition: "",
    frameType: "",
    gears: "",
    color: "",
    brakes: "",
    duration: "",
    exchange: "",
    ...props.selectValues
  });

  const handleSelectChange = event => {
    setSelectValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const [purchasedDate, setPurchasedDate] = useState(new Date());

  const handleDateChange = date => {
    setPurchasedDate(date);
  };

  const extraKeys = extras.map(obj => obj.key);
  const defaultCheckBoxState = {
    negotiable: false,
    womens: false,
    mens: false,
    dynamoLights: false,
    ledLights: false,
    shockAbsorber: false,
    fenders: false,
    singleSpeed: false,
    interiorSpeed: false,
    exteriorSpeed: false,
    antique: false,
    basket: false,
    cargoRack: false
  };
  extraKeys.forEach(keyName => {
    defaultCheckBoxState[keyName] = false;
  });
  const [state, setState] = useState({
    ...defaultCheckBoxState,
    ...props.defaultCheckBoxState
  });

  const handleCheckboxChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formValues = {
      ...inputValues,
      ...selectValues,
      ...state,
      purchasedDate
    };
    onSubmit(formValues);
  };

  return (
    <Paper className={classes.paper}>
      <Container maxWidth="lg">
        <form onSubmit={handleSubmit} className={classes.root}>
          <Typography variant="h6">Βicycle Details</Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SelectForm
                required
                name="offer"
                label="Offer Type"
                values={selectValues.offer}
                optionsArray={offer}
                handleChange={handleSelectChange}
              />
              <SelectForm
                required
                name="condition"
                label="Condition"
                values={selectValues.condition}
                optionsArray={condition}
                handleChange={handleSelectChange}
              />
              <SelectForm
                required
                name="category"
                label="Category"
                values={selectValues.category}
                optionsArray={category}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                required
                name="manufacturer"
                label="Manufacturer"
                values={selectValues.manufacturer}
                optionsArray={manufacturers}
                handleChange={handleSelectChange}
              />
              <SelectDate
                required
                label="Purchased"
                values={purchasedDate}
                handleChange={handleDateChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputForm
                name="variant"
                label="Variant"
                placeholder="eg. racing"
                values={inputValues.variant}
                handleChange={handleInputChange}
              />
              <InputForm
                name="owners"
                type="number"
                label="Previous owners"
                placeholder="number 0-9"
                inputProps={{ min: 0, max: 9 }}
                values={inputValues.owners}
                handleChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.title} variant="h6" gutterBottom>
            Body Details
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="color"
                label="Color"
                values={selectValues.color}
                optionsArray={color}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="frameType"
                label="Frame type"
                values={selectValues.frameType}
                optionsArray={frameType}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <InputForm
                type="number"
                name="frameSize"
                label="Frame size (cm)"
                placeholder="number 30-70"
                inputProps={{ min: 30, max: 70 }}
                values={inputValues.frameSize}
                handleChange={handleInputChange}
              />
              <InputForm
                type="number"
                name="rimSize"
                label="Rim size (inches)"
                placeholder="number 10-30"
                inputProps={{ min: 10, max: 30 }}
                values={inputValues.rimSize}
                handleChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="brakes"
                label="Brakes"
                values={selectValues.brakes}
                optionsArray={brakes}
                handleChange={handleSelectChange}
              />
              <SelectForm
                name="gears"
                label="Gears"
                values={selectValues.gears}
                optionsArray={gears}
                handleChange={handleSelectChange}
              />
            </Grid>
          </Grid>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Offer Details
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <InputForm
                required
                type="number"
                name="price"
                label="Price"
                values={inputValues.price}
                handleChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <SelectForm
                name="exchange"
                label="Exchange with"
                values={selectValues.exchange}
                optionsArray={exchange}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CheckboxForm
                name="negotiable"
                label="Negotiable"
                labelPlacement="start"
                values={state.negotiable}
                handleChange={handleCheckboxChange}
              />
            </Grid>
          </Grid>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Description
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputForm
                multiline
                rows={5}
                name="description"
                label="Description"
                placeholder="No phones, emails or links are allowed in the description, otherwise the classified will be deleted."
                values={inputValues.description}
                handleChange={handleInputChange}
              />
              <InputForm
                type="url"
                name="youTube"
                label="YouTube"
                placeholder="https://youtube.com"
                values={inputValues.youTube}
                handleChange={handleInputChange}
              />
            </Grid>
          </Grid>

          <Typography className={classes.title} variant="h6" gutterBottom>
            Extras
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs>
              {extras.map(extra => {
                return (
                  <CheckboxForm
                    defaultChecked={state[extra.key]}
                    key={extra.key}
                    name={extra.key}
                    value={extra.key}
                    label={extra.value}
                    labelPlacement="end"
                    handleChange={handleCheckboxChange}
                  />
                );
              })}
            </Grid>
          </Grid>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Ad Options
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <SelectForm
                required
                name="duration"
                label="Ad Duration"
                values={selectValues.duration}
                optionsArray={adDuration}
                handleChange={handleSelectChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputForm
                required
                name="password"
                label="Password"
                values={inputValues.password}
                handleChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Contact Details
          </Typography>
          <Divider variant="fullWidth" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputForm
                required
                name="userName"
                label="Name"
                values={inputValues.userName}
                handleChange={handleInputChange}
              />
              <InputForm
                required
                type="tel"
                name="phone1"
                label="Phone 1"
                values={inputValues.phone1}
                handleChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputForm
                required
                name="location"
                label="Location"
                values={inputValues.location}
                handleChange={handleInputChange}
              />
              <InputForm
                type="email"
                name="email"
                label="Email"
                values={inputValues.email}
                handleChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <div style={{ textAlign: "right" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </div>
        </form>
        {requiredInfos}
      </Container>
    </Paper>
  );
};

export default BicycleForm;
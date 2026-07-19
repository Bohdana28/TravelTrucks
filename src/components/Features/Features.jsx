import css from './Features.module.css'



export default function Features({ details }) {
  const capitalize = (str) => {
        if (typeof str !== 'string') return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };


    const features = [
  {
    id: "transmission",
    label: capitalize(details.transmission),
    value: details.transmission,
    
  },
  {
    id: "engine",
    label: capitalize(details.engine),
    value: details.engine,
    
  },
  {
    id: "AC",
    label: "AC",
    value: details.AC,
    
  },
  {
    id: "bathroom",
    label: "Bathroom",
    value: details.bathroom,
    
  },
  {
    id: "kitchen",
    label: "Kitchen",
    value: details.kitchen,
    
  },
  {
    id: "TV",
    label: "TV",
    value: details.TV,
    
  },
  {
    id: "radio",
    label: "Radio",
    value: details.radio,
    
  },
  {
    id: "refrigerator",
    label: "Refrigerator",
    value: details.refrigerator,
    
  },
  {
    id: "microwave",
    label: "Microwave",
    value: details.microwave,
    
  },
  {
    id: "gas",
    label: "Gas",
    value: details.gas,
    
  },
  {
    id: "water",
    label: "Water",
    value: details.water,
    
  },
    ].filter(item => item.value);
    
    const vehicleDetails = [
        { label: "Form", value: capitalize(details.form) },
        { label: "Length", value: details.length },
        { label: "Width", value: details.width },
        { label: "Height", value: details.height },
        { label: "Tank", value: details.tank },
        { label: "Consumption", value: details.consumption },
    ];

    return (
        <div className={css.featuresWrapper}>
            <h2 className={css.title}>Vehicle details</h2>
            <ul className={css.listFeatures}>
                {features.map(features => (
                  <li key={features.id}
                  className={css.itemFeatures}>
                        <p className={css.lable}>{features.label}</p>
                    </li>
                ))}
            </ul>
            
            <ul className={css.listDetails}>
                {vehicleDetails.map(item => (
                  <li key={item.label}
                  className={css.itemDetails}>
                        <p className={css.detailLabel}>{item.label}</p>
                        <p className={css.detailValue}>{item.value}</p>
                    </li>

                ))}
            </ul>

        </div>
    )
    
}
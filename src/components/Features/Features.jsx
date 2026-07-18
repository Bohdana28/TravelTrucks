



export default function Features({ details }) {
    const features = [
  {
    id: "transmission",
    label: details.transmission,
    value: details.transmission,
    
  },
  {
    id: "engine",
    label: details.engine,
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
    {
        label: "Form",
        value: details.form,
    },
    {
        label: "Length",
        value: details.length,
    },
    {
        label: "Width",
        value: details.width,
    },
    {
        label: "Height",
        value: details.height,
    },
    {
        label: "Tank",
        value: details.tank,
    },
    {
        label: "Consumption",
        value: details.consumption,
    },
    ];

    return (
        <div>
            <h2>Vehicle details</h2>
            <ul>
                {features.map(features => (
                    <li key={features.id}>
                        <p>{features.label}</p>
                    </li>
                ))}
            </ul>
            <ul>
                {vehicleDetails.map(item => (
                    <li key={item.label}>
                        <p>{item.label}</p>
                        <p>{item.value}</p>
                    </li>

                ))}
            </ul>

        </div>
    )
    
}
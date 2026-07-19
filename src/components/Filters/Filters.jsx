import { useState, forwardRef,useImperativeHandle, } from "react";
import { useDispatch } from "react-redux";
import css from "./Filters.module.css";
import sprite from "../../assets/icons/symbol-defs.svg";

import { setFilters } from "../../redux/filters/slice";

const camperForms = [
  {
    value: "alcove",
    label: "Alcove",
  },
  {
    value: "panelTruck",
    label: "Panel Truck",
  },
  {
    value: "fullyIntegrated",
    label: "Fully Integrated",
  },
  {
    value: "van",
    label: "Van",
  },
];

const equipmentOptions = [
  {
    value: "AC",
    label: "AC",
  },
  {
    value: "bathroom",
    label: "Bathroom",
  },
  {
    value: "kitchen",
    label: "Kitchen",
  },
  {
    value: "TV",
    label: "TV",
  },
];

const Filters = forwardRef(({ onSearch }, ref) => {
    const dispatch = useDispatch();

    const [location, setLocation] = useState("");
    const [form, setForm] = useState("");
    const [equipment, setEquipment] = useState([]);

    const handleEquipmentChange = value => {
        setEquipment(prev =>
            prev.includes(value)
                ? prev.filter(item => item !== value)
                : [...prev, value]
        );
    };

    const handleSearch = () => {
        const filters = {
            location,
            form,
            equipment,
        };

        dispatch(setFilters(filters));
        onSearch(filters);
    };
    
    const handleClear = () => {
        const emptyFilters = {
            location: "",
            form: "",
            equipment: [],
        };

        setLocation("");
        setForm("");
        setEquipment([]);

        dispatch(setFilters(emptyFilters));
        onSearch(emptyFilters);
    };
    
    useImperativeHandle(ref, () => ({
        clearFilters: handleClear,
    }));

  

    return (
        <aside className={css.filters}>
            <div className={css.locationWrapper}>
                <label htmlFor="location" className={css.label}>
                    Location
                </label>

                <div className={css.inputWrapper}>
                    <svg className={css.icon}>
                        <use href={`${sprite}#icon-map`} />
                    </svg>
                    <input
                    id="location"
                    className={css.input}
                    type="text"
                    placeholder="City"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    />
                </div>

                
            </div>

            <div className={css.variant}>
                <h2 className={css.title}>Filters</h2>

                <div className={css.section}>
                    <p className={css.label}>Camper form</p>

                    {camperForms.map(item => (
                        <label key={item.value} className={css.option}>
                            <input
                                type="radio"
                                name="form"
                                value={item.value}
                                checked={form === item.value}
                                onChange={e => setForm(e.target.value)}
                            />
                            <span className={css.radio}></span>

                            <span сlassName={css.text}>{item.label}</span>
                        </label>
                    ))}
                </div>

                <div className={css.section}>
                    <p className={css.label}>Vehicle equipment</p>

                    {equipmentOptions.map(item => (
                        <label key={item.value} className={css.option}>
                            <input
                                type="checkbox"
                                checked={equipment.includes(item.value)}
                                onChange={() => handleEquipmentChange(item.value)}
                            />

                            <span className={css.checkbox}></span>

                            <span сlassName={css.text}>{item.label}</span>
                        </label>
                    ))}
                </div>

            </div>

            <div className={css.btncontainer}>
                <button
                type="button"
                className={css.searchBtn}
                onClick={handleSearch}
                >
                    Search
                </button>

                <button
                    type="button"
                    className={css.clearBtn}
                    onClick={handleClear}
                ><svg className={css.iconClear}>
                        <use href={`${sprite}#icon-close`} />
                    </svg>Clear filters
                </button>

            </div>

            

            
        </aside>
    );
});

export default Filters;

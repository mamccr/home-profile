export function initialize(/* container, application */) {
  I18n.translations = {
    en: {
      select: {
        dwelling_type: {
          single_family: "Single Family",
          apartment_condominium: "Apartment",
          multi_family: "Multi Family",
          mobile_home: "Mobile Home",
          none: "None"
        },
        square_footage: "Sq. Ft.",
        hvac_heating_config: {
          gas_furnace: "Furnace - Gas",
          propane_furnace: "Furnace - Propane",
          oil_furnace: "Furnace - Oil",
          electric_furnace: "Furnace - Electric",
          gas_boiler_baseboard: "Boiler - Gas, with baseboard or radiator",
          propane_boiler_baseboard: "Boiler - Propane, with baseboard or radiator",
          oil_boiler_baseboard: "Boiler - Oil, with baseboard or radiator",
          electric_boiler_baseboard: "Boiler - Electric, with baseboard or radiator",
          electric_baseboard: "Baseboard - Electric, with no boiler",
          gas_baseboard: "Baseboard - Gas, with no boiler",
          propane_baseboard: "Baseboard - Propane, with no boiler",
          heat_pump_heat: "Heat Pump (usually for both heating and cooling)",
          ground_source_heat_pump_heat: "Ground Source Heat Pump (usually for both heating and cooling)",
          wood_stove: "Wood Stove",
          none: "No Heating System"
        },
        hvac_cooling_config: {
          central_ac: "Central Air Conditioning",
          window_wall_ac: "In-Window/In-Wall Air Conditioning Unit",
          heat_pump_cool: "Heat Pump (usually for both heating and cooling)",
          ground_source_heat_pump_cool: "Ground Source Heat Pump (usually for both heating and cooling)",
          evaporative_cooler: "Evaporative Cooler (Swamp Cooler)",
          none: "No Cooling System"
        },
        water_heater_type: {
          gas_storage: "Tank - Gas Water Heater",
          propane_storage: "Tank - Propane Water Heater",
          electric_storage: "Tank - Electric Water Heater",
          solar_gas: "Tank - Gas plus solar",
          solar_electric: "Tank - Electric plus solar",
          boiler_fed_storage: "Tank - Boiler-fed",
          heat_pump_fed_storage: "Tank - Heatpump-fed",
          gas_tankless: "Tankless(wall-mounted) - Gas",
          electric_tankless: "Tankless(wall-mounted) - Electric",
          propane_tankless: "Tankless(wall-mounted) - Propane",
          none: "No Water Heater"
        },
        pool_heat_type: {
          electric: "Electricity",
          gas: "Gas",
          pump: "Heat Pump",
          propane: "Propane",
          solar: "Solar",
          none: "Not heated"
        },
        home_business: {
          "true": "Yes",
          "false": "No"
        },
        ownership: {
          rent: "Rent",
          own: "Own"
        },
        programmable_tstat: {
          "true": "Yes",
          "false": "No"
        },
        tstat_programmed: {
          "true": "Yes",
          "false": "No"
        },
        x_refrigerator: {
          "true": "Yes",
          "false": "No"
        },
        x_freezer: {
          "true": "Yes",
          "false": "No",
          donthave: "I don't have a stand alone freezer"
        },
        x_dish_washer: {
          "true": "Yes",
          "false": "No",
          donthave: "I don't have a dishwasher"
        },
        oven: {
          gas: "Natural Gas",
          propane: "Propane",
          electric: "Electric",
          none: "I don't have an oven"
        },
        cooktop: {
          gas: "Natural Gas",
          propane: "Propane",
          electric: "Electric",
          wood: "Wood",
          none: "I don't have a cooktop"
        },
        x_washing_machine: {
          "true": "Yes",
          "false": "No",
          donthave: "I don't have a washing machine"
        },
        clothes_dryer: {
          electric: "Electric",
          gas: "Natural Gas",
          propane: "Propane",
          none: "I don't have a dryer"
        },
        x_tv_estar: {
          "true": "Yes",
          "false": "No"
        },
        solar_electric: {
          "true": "Yes",
          "false": "No"
        }
      },
      home_profile: {
        dwelling_type: "Which best describes your home?",
        year_built: "Year your home was built",
        square_footage: "Size of home in square feet",
        number_of_adults: "Number of adults living in your home",
        number_of_children: "Number of children living in your home",
        home_business: "Does anyone work from home or stay at home during the day?",
        ownership: "Do you rent or own?",
        hvac_heating_config: "What type of heating does the majority of your home have?",
        hvac_cooling_config: "What type of cooling does your home have?",
        programmable_tstat: "Do you have a programmable thermostat?",
        tstat_programmed: "Do you have it programmed?",
        heating_setpoint: "What is your typical thermostat heating setting?",
        cooling_setpoint: "What is your typical thermostat cooling setting?",
        water_heater_type: "What kind of water heater do you have?",
        other: "Select all equipment and amenities on your property",
        pool_pump: "Pool",
        hot_tub: "Hot Tub",
        pool_heat_type: "How is your pool heated?",
        x_refrigerator: "Is your refrigerator an ENERGY STAR model?",
        x_freezer: "Is your stand alone freezer an ENERGY STAR model?",
        x_dish_washer: "Is your dishwasher an ENERGY STAR model?",
        oven: "What type of fuel does your oven use?",
        cooktop: "What type of fuel does your cooktop use?",
        x_washing_machine: "Is your washer an ENERGY STAR model?",
        clothes_dryer: "What type of fuel does your dryer use?",
        x_num_tvs: "How many televisions do you have in your home?",
        x_tv_estar: "Are most of your televisions ENERGY STAR models?",
        x_tv_hours: "How many hours on average do you use each TV each day?",
        num_laptops: "How many laptop computers do you have in your home?",
        solar_electric: "Do you have solar electric panels?",
        num_incandescent: "How many incandescent bulbs are used on a regular basis in your home?",
        hours_incandescent: "How many hours, on average, are they on each day?",
        num_cfl: "How many CFL bulbs are used on a regular basis in your home?",
        hours_cfl: "How many hours, on average, are they on each day?",
        num_led: "How many LED bulbs are used on a regular basis in your home?",
        hours_led: "How many hours, on average, are they on each day?",
        num_flourescent: "How many flourescent bulbs are used on a regular basis in your home?",
        hours_flourescent: "How many hours, on average, are they on each day?",
        num_halogen: "How many halogen bulbs are used on a regular basis in your home?",
        hours_halogen: "How many hours, on average, are they on each day?",
        hint: {
          square_footage: "(Heated and cooled areas only. Don’t include garages or patio areas unless they are heated or cooled living spaces.)"
        },
        show: {
          title: "Your Energy Use",
          subtitle: "Home Energy Profile",
          why_it_matters: "Please answer these questions so we can provide more accurate estimate and analysis of your energy usage and identify energy savings opportunities. Please make updates to any things that have changed in your home.",
          why_fill_this_out: "Why fill this out?",
          save_error: "Unable to save - please try again later",
          basis: {
            title_html: "Your <b>Home Energy Profile</b> is the basis for:",
            savings: "Your savings estimates",
            energy_use: "Energy use estimates",
            comparisons: "Comparisons to similar homes"
          },
          tabs: {
            home: "Home",
            appliances: "Appliances",
            lighting: "Lighting"
          }
        },
        progress: {
          heading: "Home Profile",
          why: "Why should I?",
          update: "Update your home profile"
        },
        home_screen: {
          title: "Your Home, Heating, Cooling, and Water Heating",
          page_of_total: "1 of 3",
          headings: {
            building: "Building",
            household: "Household",
            heating: "Heating",
            cooling: "Cooling",
            thermostat: "Thermostat",
            water_heating: "Water Heating",
            other: "Other Equipment and Amenities"
          },
        },
        appliances_screen: {
          title: "Kitchen, Laundry, Electronics, and Other",
          page_of_total: "2 of 3",
          headings: {
            kitchen: "Kitchen",
            kitchen_refrigerator: "Refrigerator",
            kitchen_freezer: "Stand alone freezer",
            kitchen_dishwasher: "Dishwasher",
            kitchen_oven: "Oven",
            kitchen_cooktop: "Cooktop / Range",
            laundry: "Laundry",
            laundry_washer: "Washer",
            laundry_dryer: "Dryer",
            electronics: "Electronics",
            electronics_television: "Television",
            electronics_laptop: "Laptop Computers",
            other: "Other",
            other_solar_panels: "Solar Electric Panels"
          },
        },
        lighting_screen: {
          title: "Lighting",
          page_of_total: "3 of 3",
          instructions: "To estimate the amount of electricity you use on lighting, please fill out the following form. We’ve broken this out by different types of light bulbs because they use a different amount of energy. For example, Compact Fluorescent Lights (CFLs) draw much less power than regular, incandescent lights. (It may help to first walk through all the rooms in your home and tally up the different bulbs.)",
          headings: {
            incandescent: "Incandescent Bulbs",
            cfl: "CFL Bulbs",
            led: "LED Bulbs",
            flourescent: "Flourescent Bulbs",
            halogen: "Halogen Bulbs"
          },
        },
        buttons: {
          'continue': "Continue",
          continueandsave: "Save and Continue",
          finish: "Finish",
          working: "Working..."
        }
      }
    }

  };
}

export default {
  name: 'i18n',
  initialize: initialize
};

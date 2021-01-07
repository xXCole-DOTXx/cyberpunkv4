import * as firebase from '../firebase'; 

//Use export to be able to call this elsewhere
export const userCreate = async (selectedName, selectedRole, charInt, charRef, charTech, charCool, charAttr, charLuck, charMa, charBody, charEmp) => {
    try{
        //Construct a user obj
        const user = {
            Role: selectedRole,
            userName: selectedName,
            stats : {
              Int: charInt,
              Ref: charRef,
              Tech: charTech,
              Cool: charCool,
              Attr: charAttr,
              Luck: charLuck,
              MA: charMa,
              Body: charBody,
              Emp: charEmp
            },
            Spcial_Abilities : {
                Authority : 0,
                Charismatic_Leadership : 0,
                Combat_Sense : 0,
                Credibility : 0,
                Family : 0,
                Interface : 0,
                Jury_Rig : 0,
                Midical_Tech : 0,
                Resources : 0,
                Streetdeal : 0
            },
            Attractivness : {
                Personal_Grooming: 0,
                Wardrobe_Style: 0
            },
            Body : {
                Endurance : 0,
                Strength_Feat : 0,
                Swimming : 0
            },
            Cool : {
                Interrogation : 0,
                Intimidate : 0,
                Oratory : 0,
                Resist_Torture_Drugs : 0,
                Streetwise : 0
            },
            Empathy : {
                Human_Perception : 0,
                Interview : 0,
                Leadership : 0,
                Seduction : 0,
                Social : 0,
                Persuasion_Fast_Talk : 0,
                Perform : 0
            },
            Intelligence : {
                Accounting : 0,
                Anthropology : 0,
                Awereness_Notice : 0,
                Biology : 0,
                Botany : 0,
                Chemistry : 0,
                Composition : 0,
                Diagnose_Illness : 0,
                Education_Gen_Knowledge : 0,
                Expert : 0,
                Gamble : 0,
                Geology : 0,
                Hide_Evade : 0,
                History : 0,
                Language1 : 0,
                Language2 : 0,
                Language3 : 0,
                Library_Search : 0,
                Mathematics : 0,
                Physics : 0,
                Programming : 0,
                Shadow_Track : 0,
                Stock_Market : 0,
                System_Knowledge : 0,
                Teaching : 0,
                Wilderness_Survival : 0,
                Zoology : 0
            },
            Reflex : {
                Archery : 0,
                Athletics : 0,
                Brawling : 0,
                Dance : 0,
                Dodge_Escape : 0,
                Driving : 0,
                Fencing : 0,
                Handgun : 0,
                Heavy_Weapons : 0,
                Martial_Art1 : 0,
                Martial_Art2 : 0,
                Martial_Art3 : 0,
                Melee: 0,
                Motorcycle : 0,
                Operate_Hvy_Machinery : 0,
                Pilot_Gyro : 0,
                Pilot_Fixed_Wings : 0,
                Pilot_Dirigible : 0,
                Pilot_Vect_Thrust_Vehicle : 0,
                Rifle : 0,
                Stealth : 0,
                Submachingun : 0
            },
            Technology : {
                Aero_Tech : 0,
                AV_Tech : 0,
                Basic_Tech : 0,
                Cryotank_Operation : 0,
                Cyberdeck_Design : 0,
                CyberTech : 0,
                Demolitions : 0,
                Disguise : 0,
                Electronics : 0,
                Electric_Security : 0,
                First_Aid : 0,
                Forgery : 0,
                Gyro_Tech : 0,
                Paint_Draw : 0,
                Photo_Film : 0,
                Pharmacuticals : 0,
                Pick_Lock : 0,
                Pick_Pocket : 0,
                Play_Instrument : 0,
                Weaponsmith : 0
            }
        }

        await firebase.createUser(user);

    } catch (error) {
        console.log(error);
    }
}
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { PawPrint } from "@phosphor-icons/react/dist/ssr";
import { usePetsContext } from "../../context/pets.context.js";
import toast from "react-hot-toast";

function Questionnaire() {
  const navigate = useNavigate();
  const { createQuestionnaire, message, loading } = usePetsContext();
  const { id } = useParams();

  const [formData, setformData] = useState({
    designatedArea: "",
    landlordAware: "",
    whereStaysWhenNotHome: "",
    familyInfo: "",
    childrenCharacteristics: "",
    annualExpenses: "",
    employed: "",
    vacationPlans: "",
    timeAloneAtHome: "",
    expenses: "",
    suitableFood: "",
    previousAnimals: "",
    whyAdopt: "",
    walkingFrequency: "",
    willingnessToTrain: "",
    behaviorResponse: "",
    preAdoptionFollowUps: "",
  });

  // Alert to read the requirements when the page loads
  useEffect(() => {
    const showRequirimentsAlert = () => {
      Swal.fire({
        icon: "warning",
        title: "IMPORTANT - BEFORE BEGINNING",
        html: "<p class='text-justify text-sm'>STERILIZATION is a fundamental requirement for adoption. The animal will be delivered sterilized, but if, for health reasons, at a young age, or for other reasons, it has not been done at the time of delivery, the adopting person must have it done within two months after adoption, if it is an adult, and when recommended by the veterinarian if it is a puppy. AdoptifyMe will be informed at all times about this circumstance and may request immediate sterilization from the new owner when the precise time comes.AdoptifyMe will provide the animal dewormed, with the appropriate vaccinations, sterilized, with an identifying microchip and a passport, whenever possible according to the age and health status of the animal. The possible payment of the costs of these interventions will be agreed upon between AdoptifyMe and the adopting person. Interventions not performed at the time of the animal's adoption due to its age or health must be performed later, always in the collaborating clinics indicated by AdoptifyMe. Diagnostic tests not performed by AdoptifyMeand any actions taken after the animal is adopted will be the responsibility of the adopter. These actions can be performed in collaborating clinics with AdoptifyMe but always at the expense of the adopter. AdoptifyMe is never a commercial transaction. AdoptifyMe does not benefit from any financial contribution from the adopter, which is simply a collaboration to help with the medical expenses of the animal. At no time does AdoptifyMe cover the costs of collecting, feeding, staying in a residence or shelter, transportation, or any other expenses related to the animal.Continue with the questionnaire only if you agree to these conditions.</p>",
        width: "50%",
      });
    };
    showRequirimentsAlert();

    return () => {
      Swal.close();
    };
  }, []);

  const showSubmitAlert = () => {
    Swal.fire({
      title: "Do you want to submit the questionnaire?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Create questionnaire and save data
        createQuestionnaire(id, formData).then(() => {
          toast.success(message, { position: "top-center" });
        });

        navigate(`/pets/${id}/adopt`);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        navigate(`/pets/${id}/adopt`);
      }
    });
  };

  // Function to handle and save form information
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showSubmitAlert();

    //Reset the form
    setformData("");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-100">
        <div className="justify-center text-justify">
          <PawPrint size={40} className="text-orange-400 mt-2" />
          <h1 className=" text-orange-400 justify-center">
            PRE-ADOPTION QUESTIONNAIRE FOR DOG/CAT ADOPTION
          </h1>
          <p className="text-sm text-gray-400 justify-center">
            The main objective of this questionnaire is to find the optimal
            match between the animal to be adopted and the adopting family,
            seeking the maximum possible compatibility between the animal's
            characteristics and the lifestyle of the family with whom it will
            share its home. This questionnaire also aims to help the potential
            adopter consider different life situations (vacations, moves, family
            changes, etc.) that they will face throughout the life of the
            animal, which will accompany them at all times in any circumstance.
          </p>
        </div>

        <form onSubmit={handleSubmit} method="post">
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue">A) HOUSING</h2>
            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                1) What area of the home will be designated for the animal?
              </label>
              <select
                name="designatedArea"
                onChange={handleChange}
                value={formData.designatedArea}
                className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              >
                <option value="">Choose response</option>
                <option value="all the house">All the house</option>
                <option value="part of it">Part of it</option>
                <option value="It's not clear yet">It's not clear yet</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                2) If you live in a rented property, does the landlord/landlady
                know that you are adopting an animal, and do they agree to it?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="landlordAware"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="landlordAware"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                3) Where will it stay when you are not at home?
              </label>
              <select
                name="whereStaysWhenNotHome"
                onChange={handleChange}
                value={formData.whereStaysWhenNotHome}
                className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              >
                <option value="">Choose response</option>
                <option value="outside the house">Outside the house</option>
                <option value="all the house">All the house</option>
                <option value="part of it">Part of it</option>
                <option value="with family/friends">With family/friends</option>
                <option value="It's not clear yet">It's not clear yet</option>
              </select>
            </div>
          </section>

          <section className="mt-4">
            <h2 className="mt-2 text-AMblue"> B) FAMILY</h2>
            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                4) Is there anyone in your family with allergies or not agree to
                the decision to adopt?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="familyInfo"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="familyInfo"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>
            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                5) We want to offer you the most suitable animal for your
                characteristics. What are your children like?
              </label>
              <select
                name="childrenCharacteristics"
                onChange={handleChange}
                value={formData.childrenCharacteristics}
                className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              >
                <option value="">Choose response</option>
                <option value="I dont have">I dont have children</option>
                <option value="calm">Calm</option>
                <option value="energetic">Energetic</option>
                <option value="responsable">Responsable</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                6) Have you already calculated the annual expenses you will
                incur to feed the animal and provide for its veterinary care, as
                well as any unexpected expenses?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="annualExpenses"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="annualExpenses"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>
          </section>
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue">C) OCCUPATION / FREE TIME</h2>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                7) Are you currently employed?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="employed"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="employed"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                8) What will you do with the animal during vacations or when you
                will be away for a weekend?
              </label>
              <div className="mt-1">
                <textarea
                  name="vacationPlans"
                  onChange={handleChange}
                  value={formData.vacationPlans}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                9) How much time will the animal spend alone at home?
              </label>
              <div className="mt-1">
                <textarea
                  name="timeAloneAtHome"
                  onChange={handleChange}
                  value={formData.timeAloneAtHome}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue ">
              D) ABOUT COMPANION ANIMALS IN GENERAL
            </h2>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                10) What expenses do you think come with having a companion
                animal?
              </label>
              <div className="mt-1">
                <textarea
                  name="expenses"
                  onChange={handleChange}
                  value={formData.expenses}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                11) What kind of food do you think is suitable for the animal?
              </label>
              <select
                name="suitableFood"
                onChange={handleChange}
                value={formData.suitableFood}
                className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              >
                <option value="">Choose response</option>
                <option value="leftovers">Leftovers</option>
                <option value="bread">Bread</option>
                <option value="dry food">Dry food</option>
                <option value="homemade food">Homemade food</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                12) Have you had any animals before? Do you currently have other
                animals at home? If so, please tell us a bit about them:
              </label>
              <div className="mt-1">
                <textarea
                  name="previousAnimals"
                  onChange={handleChange}
                  value={formData.previousAnimals}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue">E) ABOUT ADOPTION</h2>
            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                13) Why do you choose this animal?
              </label>
              <div className="mt-1">
                <textarea
                  name="whyAdopt"
                  onChange={handleChange}
                  value={formData.whyAdopt}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                14) How often and for how long will you take the animal for
                walks?
              </label>
              <div className="mt-1">
                <textarea
                  name="walkingFrequency"
                  onChange={handleChange}
                  value={formData.walkingFrequency}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>
          </section>
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue ">F) ABOUT ANIMAL BEHAVIOR</h2>
            <p className="text-sm text-gray-400 justify-center">
              Animals from shelters often come from abandonment and may have had
              a difficult life, and generally, nothing is known about their
              past.
            </p>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                15) Are you willing to train the animal from scratch and inform
                the shelter about its temperament, behavior, and progress?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="willingnessToTrain"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="willingnessToTrain"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg text-blue-950">
                16) In the event of maladjustment or a behavioral problem in the
                adopted animal, what will you do? (try to solve it, return the
                animal to us, give it to another shelter, give it to someone
                else...):
              </label>
              <div className="mt-1">
                <textarea
                  name="behaviorResponse"
                  onChange={handleChange}
                  value={formData.behaviorResponse}
                  className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <label className="font-medium text-lg  text-blue-950">
                17) We conduct pre-adoption follow-ups, are you willing to
                receive possible visits for the adoption process?
              </label>
              <div className="mt-1">
                <input
                  className="mr-1"
                  type="radio"
                  name="preAdoptionFollowUps"
                  value="yes"
                  onChange={handleChange}
                />
                Yes
                <input
                  className="ml-3"
                  type="radio"
                  name="preAdoptionFollowUps"
                  value="no"
                  onChange={handleChange}
                />
                No
              </div>
            </div>
          </section>
          <section className="mt-4">
            <h2 className="mt-2 text-AMblue ">OBSERVATIONS</h2>
            <textarea
              name="observations"
              onChange={handleChange}
              value={formData.observations}
              className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
            ></textarea>
          </section>
          <div className="mt-4 lex justify-center items-center">
            <button
              className="bg-orange-400 text-white p-5 rounded-xl text-sm shadow-xl shadow-orange-400/25"
              disabled={loading}
            >
              {loading ? "SUBMITTING" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questionnaire;

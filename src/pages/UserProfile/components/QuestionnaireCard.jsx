import React from "react";

function QuestionnaireCard({ questionnaireData }) {
  return (
    <div className="overflow-y-auto">
      <div className="shadow-xl shadow-gray-400/10 overflow-hidden hover:shadow-orange-400/20 rounded-xl">
        <div className="w-full border-r pb-20 bg-white">
          {/* gradient */}
          <div className="h-125 rounded-tl-4 rounded-tr-4 bg-gradient-to-r from-orange-500 to-yellow-500 h-32"></div>
          {/* profile down */}
          <div className="mt-5 relative text-left px-3">
            {/* title */}
            <div className="text-lg font-bold">Adoption questionnaire</div>
            {/* questions & response */}
            <div className="px-5 py-3">
              <p className="text-base font-bold text-gray-500">Question</p>
              <p className="text-base text-blue-950">Answer</p>

              {/* Section A - HOUSING */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue">A) HOUSING</h2>
                <div className="mt-1 flex flex-col">
                  <p className="font-medium text-base text-gray-500 w-full">
                    1) What area of the home will be designated for the animal?
                  </p>
                  <p className="text-base fw-fw-bold  text-orange-400 w-full pl-4">
                    {questionnaireData?.designatedArea}
                  </p>
                </div>


                <div className="mt-4 flex flex-col">
                  <p className="font-medium text-base text-gray-500 w-full">
                    2) If you live in a rented property, does the
                    landlord/landlady know that you are adopting an animal, and
                    do they agree to it?
                  </p>
                  <p className="text-base text-orange-400 w-full pl-4">
                    {questionnaireData?.landlordAware}
                  </p>
                </div>


                <div className="mt-4 flex flex-col">
                  <p className="font-medium text-base text-gray-500 w-full">
                    3) Where will it stay when you are not at home?
                  </p>
                  <p className="text-base text-orange-400 w-full pl-4">
                    {questionnaireData?.whereStaysWhenNotHome}
                  </p>
                </div>
              </section>

              {/* Section B - FAMILY */}
              <section className="mt-4">
                <h2 className="mt-1 text-AMblue"> B) FAMILY</h2>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    4) Is there anyone in your family with allergies or not
                    agree to the decision to adopt?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.familyInfo}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    5) We want to offer you the most suitable animal for your
                    characteristics. What are your children like?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.childrenCharacteristics}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    6) Have you already calculated the annual expenses you will
                    incur to feed the animal and provide for its veterinary
                    care, as well as any unexpected expenses?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.annualExpenses}
                  </p>
                </div>
              </section>

              {/* Section C - OCCUPATION / FREE TIME */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue">C) OCCUPATION / FREE TIME</h2>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    7) Are you currently employed?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.employed}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    8) What will you do with the animal during vacations or when
                    you will be away for a weekend?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.vacationPlans}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    9) How much time will the animal spend alone at home?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.timeAloneAtHome}
                  </p>
                </div>
              </section>

              {/* Section D - ABOUT COMPANION ANIMALS IN GENERAL */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue ">
                  D) ABOUT COMPANION ANIMALS IN GENERAL
                </h2>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    10) What expenses do you think come with having a companion
                    animal?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.expenses}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    11) What kind of food do you think is suitable for the
                    animal?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.suitableFood}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    12) Have you had any animals before? Do you currently have
                    other animals at home? If so, please tell us a bit about
                    them:
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.previousAnimals}
                  </p>
                </div>
              </section>

              {/* Section E - ABOUT ADOPTION */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue">E) ABOUT ADOPTION</h2>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    13) Why do you choose this animal?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.whyAdopt}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    14) How often and for how long will you take the animal for
                    walks?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.walkingFrequency}
                  </p>
                </div>
              </section>

              {/* Section F - ABOUT ANIMAL BEHAVIOR */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue ">F) ABOUT ANIMAL BEHAVIOR</h2>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    15) Are you willing to train the animal from scratch and
                    inform the shelter about its temperament, behavior, and
                    progress?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.willingnessToTrain}
                  </p>
                </div>
                <div className="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    16) In the event of maladjustment or a behavioral problem in
                    the adopted animal, what will you do? (try to solve it,
                    return the animal to us, give it to another shelter, give it
                    to someone else...):
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.behaviorResponse}
                  </p>
                </div>
                <div class="mt-1 flex">
                  <p className="font-medium text-base text-gray-500 w-1/2">
                    17) We conduct pre-adoption follow-ups, are you willing to
                    receive possible visits for the adoption process?
                  </p>
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.preAdoptionFollowUps}
                  </p>
                </div>
              </section>

              {/* Section O - OBSERVATIONS */}
              <section className="mt-1">
                <h2 className="mt-1 text-AMblue ">OBSERVATIONS</h2>
                <div className="flex">
                  <p className="text-base text-blue-950 w-1/2">
                    {questionnaireData?.observations}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionnaireCard;

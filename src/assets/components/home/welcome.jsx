export default function Welcome() {
  return (
    <>
      <div className="bg-cyan-50 flex flex-col gap-y-8 justify-center items-center">
        <div className="text-center md:text-start flex flex-col md:flex-row justify-center items-center  pt-12 px-4 gap-y-4 md:gap-y-0 md:gap-x-12  ">
          <div className="w-full md:w-1/2">
            <h2 className="text-cyan-600 text-2xl font-semibold">
              Welcome to ICLSMHA-2026
            </h2>
            <p className="mt-5 text-gray-600 font-[450] ">
              We are delighted to invite researchers, academicians, healthcare
              professionals and industry experts from around the globe to join
              us at ICLSMHA-2026, where innovation meets collaboration. This
              international platform is designed to foster dialogue, share
              cutting-edge research and explore interdisciplinary strategies
              that shape the future of health and life sciences.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/welcome/international-conference-2026.webp"
              alt="International conference 2026 on healthcare, life sciences, and biomedical research"
              title="Welcome to the International Biomedical and Research Conference 2026"
              className="rounded-2xl hover:scale-105 transition duration-300"
            />
          </div>
        </div>
        <div className="px-12 md:px-28">
          <p className="">
            <b className="text-cyan-600">ICLSMHA-2026</b> serves as a dynamic
            hub for scholars, healthcare practitioners and industry experts to
            come together, exchange knowledge and foster cross-sector
            collaboration.
          </p>
          <p className="">
            This conference is committed to addressing pressing global health
            issues by embracing innovative, multidisciplinary approaches across
            biotechnology, public health, environmental science and medical
            research. Engage with thought leaders, present groundbreaking work
            and be part of transformative conversations that inspire progress in
            healthcare.
          </p>
          <p className="pb-4">
            Let us come together to bridge scientific discovery and practical
            application in advancing health, sustainability and global
            wellbeing.
          </p>
        </div>
      </div>

      <div className="background-gradient p-10 md:p-20  text-gray-200 text-shadow-md">
        <h2 className="text-2xl md:text-4xl  font-bold text-center text-[var(--color-tertiary)] ">
          Conference Theme
        </h2>
        <h3 className="text-xl md:text-2xl mt-3 text-center">
          <b>"Bridging Science and Practice:</b> Multidisciplinary Approaches to
          Health and Wellbeing"
        </h3>
        <div className=" grid grid-cols-1 md:grid-cols-5 justify-center items-center mt-5 border rounded-2xl p-2 md:p-10 gap-10 text-center md:text-start">
          <div className="md:col-span-2">
            <img
              src="/images/welcome/international-conference-online-2026.webp"
              alt="International conference online 2026 focusing on healthcare and research innovation"
              title="International Conference 2026 Online - Theme on Healthcare and Biomedical Sciences"
              className="rounded-xl"
            />
          </div>
          <div className=" md:col-span-3 ">
            <p className="mt-5 ">
              The International Conference on Life Sciences and
              Multidisciplinary Healthcare Approaches (ICLSMHA-2026) centers on
              the critical integration of life sciences, healthcare, and allied
              disciplines to address complex global health challenges. This
              theme emphasizes the importance of translating scientific
              innovation into real-world healthcare solutions through
              cross-disciplinary collaboration.
            </p>
            <p className="mt-5">
              From biotechnology and environmental health to clinical research
              and public health policy, the conference aims to foster meaningful
              dialogue and knowledge exchange that drive sustainable
              improvements in global wellbeing. By uniting diverse perspectives,
              ICLSMHA-2026 seeks to build pathways toward inclusive,
              evidence-based, and impactful healthcare practices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

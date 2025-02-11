import "../assets/styles/Profile.css";
const Profile = () => {
  return (
    <>
      <div className="profileContainer">
        <h1 className="profileHeading">Profile</h1>
        <div className="profileImage">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA2gMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEAQAAIBAwMCBAMFBgQDCQAAAAECAwAEEQUSITFBBhMiUWFxgRQyQpGhIzNSscHRFSRyghZDYgdFU4OSssLh8P/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIREAAgMAAwADAQEBAAAAAAAAAAECAxESITEEIkEyYVH/2gAMAwEAAhEDEQA/APWCT2x9aaXIPamM3tVK/uWht3dVLEDoOtD6WkhLPFAvF14tvZxwNIUEzYLDsKHW2ry3Z/y9y29DzG3FVNbvBf3kC3CbQqnIPc1xz+TFxa8Yn4dokhsNZt0Q7o5l2k+9bl24rCw28Z8QWQD+gKGCgYxgVtXb01p8XeGAkPjZvepAarRHmpg2OtdIyTJ7Y+tNkDFDyPpXBgad2pDMP4ltTNHPuJYYPBNCYLCAW8WEGdtaTXFBgn+tC4FX7PF77BW3xPWcfzVsUH9GhCaXAoAwBVplxTdMAGnQ/KpWqZ/0zoq/hFZl+ArJeP13abajH/N/oa2TCsb44vNrRW1uu6ZfV8s8DFZSeI1jHkwCLu3s0VJMmQDBGCcVp9M8ZLDFFELePagABOeawMthdTRkG3fcDkFFzV3RLLUPMMXkM6NwQ4K4rlczqVX/AE9csPEFrePFHh4pJT6Q44JosenGK8zl07UtOtRLAgPIIYMcp8elbPwtrH+LWB8xXE8OEkZhw59xVxlpnOOMuyg+YmcdO1ONJL+8T5GlJHFbLwyZwBp2COppFNObiqRI2m+rtj60u4UvXkUwGH402nnpTKBGZHiezkkwdVthnou2rq3n2lSbW5hl46IaGXnh3T5GYxRLGxHQKCM1kM/YL/aojilQ7WeM4Vq55ycV2SHNYtJopnvEDxSqQSI+596ZIqa20T21wRICFOTjBqrqusTM9taQShYyRvmfo3wFTaHKltqTvcNCcEAbePrXFLjOSA0Oj6Y9vdm8ujumA2Jz0HvWjLhlHvQPU9TSztfMxvPtnvQJPFlwkmCi89iOn1rsUoVZFD03MJwasg1nNN12OVzHcr5b7Q25G3KRR9WB5B4PIrdPfB6TZp2eDUQNPAyDTY0ZfxGdsE2PY0OswDZwnHOwUa1VYJHdLiOR1JIIQ4qkJ7CCMRx2khCjAzJV02wr3Tn+RTKzMDemD/IQj4VOy0AXxCsCCOK1wo6DOa7/AIimPSFKiVsW20bQg4xSDZQ+1ZyOxgvfE99PLHuW3RIwD03kZz+WKnGs3L/hVfpT9OlcSX8siZdmV/YN6cf0rGyaaOilPkXfs0KKdsaj5CoTGoPpUZ96AXviZ7e7WJJUlXPqAhb9DVrWr+4tbWOSPIMvTC5xWB2pGjtMvhJFBUggg96g0O2XTdWu7NCRFKvmovYY4/qKzuha3ceaPPM52tgmSHCn5EVrXCjVYJ2OF8vH58Cqi0jC2LLMv7yP5GndhTZR+1T607sK6V4chDcyGJA20t74pEYvEHO8fClugGgcM+wY60q4WIYYsMDkHrWiEyMYIyQ5+tPjAzkAg/E01WXGWJAqVQCMrnFMBxFNxTsGuxUgB5BwelYPxFp/+HXy3W3No7bjnnBrV6pqclp5cYtn82Y4TPIFZrXLgSwmCQie6zjOPSnwrltth4QUZItJu7aXIeNXHp9WSjfChV5ZQ2crNbln3/dDkn61yaHrUssbxqsMC/eLdx7mrOv2bRwo3mb2i4zjrXO9T6FjZDpd7dS4aaUStE2Ejk5GaJ6pFrCRmeaKJeOUjA5FVNI0S/k0Tcqqg5bJ6n40Zs7iDyLS4nkywjKn4n40+XGST/Sv0zFrqsiEwqPKYfiTvXp+h6011YRNIu2RVCsKzMdtYXDPJFZhifvenrV+yLRyhI1ZEI+6RW8ZYww2FvdeYcZq+p4NAbAnzB796NofSK33opAbUFzI/H4jQqVOeaM3ozJJ86EznDVizRFKZFAJfgDnNWLW2WYAr3rJeLry5SQxWrHHRsdhVbwnrd9JqUdvJJuROAD3rGM1ywzdneHo0WngGrMEKgPGV44H06/1qZJVCBjjpTJnV0JRjmtpJcTemWSxlGe3sxOu9FZuoz0UVNcSWM0DRyyR5ONobgNVA/a4rxisEckTn1uWOVHwHfmmXUZV9yS275+6i7s/l2rNeHbha037L5i7YlAPY9qLyiSW5tYo+VRwZR/04OP1xWb06C7zvuFjSVvTsiJ2j269a21vGqxxsVG7HXHNKC1mdsuPZFMf2qH512TxxSTH9on1pa6o+HAwfqqzyIiwpuUt6hnFSadvjsf8zhWzyOwFWZMCM+4qpdAtZbQfvcVaX6Xz2PAsiSLAIwQemKlDAjgYqhpsarbqh7Y796v8ZqzN9M4mkzS11SADvLIPKrufuAgfWgsOjxx7/PXILEgCtTMOSTVGZQaxlVFvWhYgasQW0aEtuUqQu7r8qwV9DMRKrSMTHGCFHzxXodxGDG+eBgnjtXn0V0sOqWwZnmMigKMdeTWVqSwMDI1XVVsx9ntlS3iAQsEJx86ER6hc6Y5jnhQqxyu4fyr0aGzWe2C3SgKR+6XoP71nxpiNL5U8QdLdiAX/ABA1FlTbQEemaraXRSPeiOeinvWhhj/Z4A+tZ650e0nH7OMRuPuso5FF9GkuY4/JuiGK8Bh3FbQWdMYatowLoMBwV5okoG2qltyM1cXoK2/ABl2P2jj4mg1wPVRi9ljSVvMkCcntQyZrEnLXqj/bWLRZLB4b0e9sxcXFokkrj1MSeap23hrSLK/Wa1s0jcdCKIWer6da2vkNeK3JwQprory1mkLRSvL/AKIicVXGOdInCS5ULGMVFajdKqd2OOe9FDZLPGpMm0d8CgejM11dPqkQIga4Nvag9BCudz/NmUfTFaRqbYnLC4ZFikMUxwc9Txmq+2BZy6tgmiGp2fmZlRC5/GgHX4igy2aGRWjkdlJxsHJ+WK57K3F4dtVqcQpA8AKtkbc9aMtcpC6xzqyZj3AkcH3/ACobp9jtkWafHoH7OPsvxPuafrF0Ir+yAb1CRenXlsf3raqp/py3XJvEW5Cr+U6EMrchgcginmhOh7Y77VrIkmK3n8y3DHkK+SV+WQ2KMSREZ2NuHw7VXFxI3Ri8scj6Uy5jVojxyOlOjO3rSuSykY600wIIItsY2oOSc1OEAHSmqGUYHSnjOOaeh+iZxS5pDXYNAMrTjk1QkGSB70VmHFUZFy6ge9IB6WC+U27nI70AufCWnfa0ugknmxjCbegrXHpVeRQScjgUmkxmejjuLThJmaPPRh0pbpsttPXvRCdMNlh6Rzz3oBPMftUgBzzUBhfghyc0RhtxjpVLTX39aMRAYqkhD4F2ZzmrIPHANRrUg6VX4AC1Vcyt8zQS4jz1rQagMyvQ+2tRdXkcR+6W9XyFY5rwsi0rw8bvbcXOUt+wHVh7/AVppVisLRo7VAnAAA45PFXFA2BAAFK8AVWuSNgdxkLyfmK6YxSM2wdq+sWWlWJinlaOQjy0XaSXbH4QOtD/AANdWsmhW2nhtt3bRL5sTghsgfe57Z7/ABqjoW/WNdvNTZUKIDBCzjIUAjcR8Sf0FEfESDTpNM1NQiG2uBFIUGMxvkHP1/pWhJ3jDXzoOmNJAglunIESnkLk/eb4D9eleZ6T4x19NXt498E6rJ/mGYYMgJ9W4jvXonirR7eGK91CUs8U9uyT7ucHGUI/l9aw3/Zm8a6tdWjIu8qzjueCAR+tJ5pK1I9bjuoWtFuww8lk3bj7YqpY2zXF1/iF0CWzmJT+Fex+eKi0+yaZJIJW3W6yZIP4iD/Ki0mFTaOhGDjimOK0AaXL5/iPUmjzgLGp+B5P8jWghlBVHXORWW8Jhmh1K6LszT3cmGPUhTsH6LWkhASNV9hilgwjiGeMNtIbuQKgkjMRwQSOzVAjnzwgztQbjz1J4xRBiGt23cnH5Vm4lJlPNNz7g0v8q7NSUJmurjSUCHSLnAHWqxt5g4Pl55966+kKiJwcYJFMS4buxp+iLnlOeuajmilK4jRvypguG/ipfPfpRg9B93b3RjY+RIxA4UDrQBNK1DcS1pNkn+GtgJ298U4XDD8VLiPQFptldRn1wSL/ALaMJE4HKn8qlFw//wCNcbl/4jTwQg4p/aow+8Z70oJpMAZffvXqxocGxZLhhgvwp+HeultJJ59vC7ulEJF8uBFjA/Z449x3pVx71hJ9CTNsUkfH6Gq1ywe1V1PDNzT52O056dVNRykNaRkAc8muggSxtYrW3wkYTe24qBgZPJ/nU1zbx3MDw3CLIjc4YZ5HI/WnSkkj505iQBSAjntotQ0toJxlJodrD2yK8i8F6XcWn/aJLZujLJDDMJDjjgqAfkcgj5ivYLfKwqVJ4z2z3qpstrW9muIoEN5OqiRl6kDOAT8MmjALyRLFGsajAUY60P1e9jtLOV09TBSR7DFSnzW9UxHwQdBVeW3huzJDOgdQMFCcbgaGAN8Ixsnh61L/AHpF8wj2Leo/zo6x2xFs9BmqMaLayfZYlAiVAVUfhHtU2pS+Tp7NkcrTQEsEmQ7jqDgfE0Rs3JBTBPvQTTtzwQgchiXLfM5ovbttbGcfM0pAOuYRGQUPBH61BV14jIvX41SYMrEY6VkykzqSuyaSkMr3nrtHPdTmqavXahd/Zo9uPS/pzUcRyBSixtfpZDU8GoRTxxV6LCUNiu3VHmuzRoYSZpN9R7qTdQBZhbJf4GrEK73AqhbviQj3FFLZNq7u5oS7EyVkjJLAAN04qGVtoIPIqZl4qtcSgKVIO4DjitCSvNxAQe3ANUdKvVvLR1bIMbMvPwOKp65qYs9NkkZsACh/hi780NIc4nUOM/GnqfQ8ZsFO5OvSlkYBMnoBmqatKinaysMcEr0p4DyKVmlXaeqqKQi3CwEEeOu2oWjCncAKk3DgD2prnJx3oASQjHwqL7PHJ69zI/QMhwcf1pd2c57VIjDYOO1MBiWlvHubJZz95mYktQvXZI2tHQY5XHWiM8gUZNBL0rIG46016AV0+VY7aGMADEKjjtxxVssTjnGe9B7EyKIEkBBaPAPYjGaLpGWCn8OKGBNHN5OGDkn2qV2S4XKjbJ7HvSJGCcgBsU5+MApjHcVm0mCKxOKTNSTqMhh6lPX51FxUeFgbXVzZ7x+Fs0tm2+CNh3FSX6+daSoOSVqtowf7GgkUqVyMEVhH00f8l4UvNKBS4q9IOpGpcU05o0Y2kzTiKY2arRD7dgLqPPQnBo0pwOKzxba6sexo15o4xyPerixNFpGHeoprdZSSDhu2ajDEn+1A/F/iSfQ7SD7HaG6uJ5xBGu7aASrHJ4PHpq9wSi28QN8Y6BfzWeUQShGBwh/mPrS6XBDptnbxXDoZUQKWBIGat2t1ezae0urSgyuPUkQ2onwA6/UmhrgkEIgmib7yk8/QVxTn9tR3VU/X7BqG5W6UwwXRhcdAVyDV6G3PkJvnR5Mct0zWR06ALfARzyIv/hN1H581p4bkBQG5rWhyl2zL5KjHIostugUvJkIoyW61At/BIBLG+5OxA61MsyMCoBBI+VZW6mvDcm3WMrgHMjjgfId6q2yUfBUVRnuhyK/WS6MYVvV1PtRCRHCZyNvzrKWZ8oNDbyF5AcySOcnPx/tWitrqWO3X7S4PHDY61jC+SfZtZ8eOdDhbS3Cho2XYejbsg/lVi30a3JzMzyEjscCstY6jNaeJkghc/ZbhjvQ9M4OCB2Oa099ezQR7ouGB9uBXXCfNdHFZDg+y60AgQKkY2oowKasiED1lT3DDil0/UYr5SoysyjLJ8PcVJcW8bgkxtu9x1of+kLsfG4x0H06GuaVF9LsVHbI4oeIpEfMD7sfhPBqdZmZGS7gYKfxY6UmPCbYRMVPMcgxn41SJwcVdjbhSh3xjPzFD855pMZDjHsKZ+LrUrOp7VBM3p/Zj1Cub9NiTNKKFT6nJAfXY3P8AsQN/I1ENftR++juYj/127j+lXyFgaNIaFR+ItJY7ft1up9nkCn9aux31tMMxTRP/AKXBo5CwnI4pNtM8xOvFOEi/xCjQwjkT0/Gnywuw3wytGzYPHP6U8YbvVC9urmC6EUFk0y4zuXNUuxN4T+fqMRwyRSr7qdp/r/OhGvXLzcS2c3LB0YKG2OBx0PIozA1/L/3dIo+MgpLyW1gA+23Nrbt/DJMufypvfNEmt1IAtrSSWYODFJja6SLtKkcHr1+dDlkgkzcWty0bkfhO5G+Y/sRR24k0y6XYIJbsE/8ALtmI/NsCuh0exaNQdNMKqcqGwMfQVySi0/Tuhcs8JtFaS2jW5uokuAy8rGeV+IB6/KtDZXum3oLW7xMV4ZMAMp9iOoodBFBjaB044qHUtE0/UUxPFhwMCWNijj5MOa3rkorEc9v2lpod1uOy/kKyXimGJbkSQXDl5W5hRSSfqOnSqq+BdF4LvfOR/Heyn/5UsfhPRreQ+XHKp9xO4J/WqnNNdk1qUXqKEMt1kKbOSCBeANh3N+VWnuZo14hkYDtuXP5ZzVr/AIa0dhh4Hcf9Uzn+tSR+GdDUYGnxfUmuf6+nQ7JGa1HUo7fUrWRmijmRlkZJpFU7Qe3PU4NFr7xVp8ssSwXcDq45RZVL57DbnNEf8A0dWAXTrb/01YTSdOt3WS3soEde6oM10V2KK6Rz2xc2tZX0qW5XUYJUiKgnktx6e+RWil1iJZCiQyyHvtXj8+lBES7EgW0ggSNTjEncfDBq4Gv1H7q0B/1t/aqnc5ExqUSSXUpJciPTmB/ic4H6ZqFW1R29M8MKe0Slj+ZOP0poOojAD2wH+/8AvTofthnBnWAxkYYqxB/+/wA6y5tlcUWIIZd+Zp5ZSRyWIA/ICpMD+E04HHy+dRk89/zp6IrKSc8muBIbrSV1SUh24tnJpcenNdXUhkUsMT4DxqwPuoNUJNF0ufcZdPtmI7+UK6uoAgPh/Th+6jkh4z+ylZf5GoH0tYgTFeXqf+cT/PNJXUisKU9xe2Z3R39w3wcIR/7aZp+sanLcMPt0iZ49CrwPyrq6pbYsRoodPS7Ob24urjPJEkx2/kMCr9tptjZx7ra0hQk9kFdXVUe/REzN6TgAY9qgZj0pK6lIqIqHB4qftXV1OATOFV2ALGurqcxQOA5qRADXV1QimM2gSCnE11dVxIkPXhc4GflSniurqskaCc07rXV1ADTUddXVLA//2Q=="
            alt="profile"
            className="profile-pic"
          />
        </div>
        <div className="profileDetails">
          <div className="name input-flex">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="contactInfo input-flex">
            <input type="email" placeholder="email@gmail.com" />
            <input type="tel" placeholder="Contact Number" />
          </div>
          <div className="genInfo input-flex">
            <input type="number" placeholder="Age" />
            {/* <input type="number" placeholder="Enter Your Age"/> */}
            <select name="cars" id="cars">
              <option value="Prefer not to say">Prefer not to say</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="profileAddress input-flex">
            <textarea
              rows="10"
              cols="120"
              placeholder="Enter Your Permanent Address..."
              name=""
              id=""
            ></textarea>
          </div>
          <div className="password input-flex">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button className="profile-btn" type="submit">
            UPDATE
          </button>
        </div>
      </div>
    </>
  );
};
export default Profile;

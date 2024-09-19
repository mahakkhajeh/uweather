import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles



  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"Welcome"}
        style={{
          minHeight: 500, margin: 10, width: "calc(100% - 20px)",
          // boxSizing: "border-box",
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
          backgroundRepeat: "no-repeat",
          backgroundImage: "url(https://cdn.ituring.ir/research/25/UWEATHER.project.jpg)"
        }}>
        {/* <pre style={{ direction: "ltr" }}>{JSON.stringify(props, null, 2)}</pre> */}



        <c-x>
          
          <br-x />
          <br-x />
          <br-x /><br-x />

          <f-cse>


        <f-css style={{ height: 50,width: 130, border: "solid #22679CAE", borderRadius: 10, backgroundColor:"#276CA1A9" }}>
          <f-14 style={{ padding: "10px 27px", color: 'midnightblue', fontSize: 20, fontFamily: "meather"}}>weather</f-14>
        </f-css>

        </f-cse> 


           {/* <f-25 style={{ padding: "0 10px", color: "white", fontSize: 35 }}> weather</f-25>  */}


          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />
          <br-x />







          <f-cse>

            <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#62C3F77E",  boxShadow: "10px 10px 70px 10px rgba(61,142,188 ) inset" }}>
              <img src=""
                style={{ height: 26, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>feels like:</f-20><sp-3/><f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].FeelsLikeC}</f-18>
              <f-16 >°</f-16>
              <sp-3 />
              <f-16 style={{fontFamily: "meather"}}>C</f-16>


            </f-cc>




            <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#479DC87C", boxShadow: "10px 10px 70px 10px rgba(61,142,188 ) inset" }}>
              <img src=""
                style={{ height: 25, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>Humidity:</f-20><sp-3></sp-3> <f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].humidity}</f-18>
              <sp-4 />
              <f-15 style={{fontFamily: "meather"}}>%</f-15>

            </f-cc>

            <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#62C3F77E",  boxShadow: "10px 10px 70px 10px rgba(61,142,188 ) inset" }}>
              <img src=""
                style={{ height: 25, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>UV Index:</f-20><sp-3/> <f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].uvIndex}</f-18>
              <sp-4 />
              

            </f-cc>

      
          </f-cse>

          <br-x/>
          <br-x/>

          <f-cse>
          <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#1FB1FF7E",  boxShadow: "10px 10px 70px 10px rgba(61,142,188 ) inset" }}>
              <img src=""
                style={{ height: 25, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>Wind:</f-20><sp-4/><f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].windspeedKmph}</f-18><sp-4/><f-18 style={{fontFamily: "meather"}}>km/h</f-18>
              <sp-4 /> </f-cc>

              <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#62C3F77E",  boxShadow: "10px 10px 70px 10px rgba(61,142,188 ) inset" }}>
              <img src=""
                style={{ height: 25, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>Pressure:</f-20><sp-4 /><f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].pressure}</f-18><sp-4/><f-18 style={{fontFamily: "meather"}}>mb</f-18>
              <sp-4 /> </f-cc>
              

              <f-cc style={{ height: 140, width: 250, borderRadius: 10, backgroundColor: "#62C3F77E",  boxShadow: "10px 10px 70px 10px rgb(47 132 182) inset" }}>
              <img src=""
                style={{ height: 25, objectFit: "contain" }} />
              <sp-3 />
              <f-20 style={{fontFamily: "meather"}}>Visibility:</f-20><sp-3/> <f-18 style={{fontFamily: "meather"}}>{props.data.current_condition[0].visibility}</f-18><sp-4/><f-18 style={{fontFamily: "meather"}}>km</f-18>
              <sp-4 /> </f-cc>
          


          </f-cse>


        </c-x>
        <br-x />
        <br-x />
        <br-x />


      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await (await fetch("https://cdn.ituring.ir/research/api/weather/"))
  let data = await res.json()



  return {
    props: {
      data: global.QSON.stringify({
        data,
        session,
        // nlangs,
      })
    },
  }
}
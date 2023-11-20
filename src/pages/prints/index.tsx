/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
const Print = () => {
  return (
    <>
      <div className='main-container'>
        <div className='page-container'>
          <div className='page-inner'>
            <table cellSpacing='0'>
              <tbody>
                <colgroup>
                  <col width='85' />
                </colgroup>
                <colgroup>
                  <col span={2} width='67' />
                </colgroup>
                <colgroup>
                  <col width='60' />
                </colgroup>
                <colgroup>
                  <col width='61' />
                </colgroup>
                <colgroup>
                  <col width='82' />
                </colgroup>
                <colgroup>
                  <col span={2} width='76' />
                </colgroup>
                <colgroup>
                  <col width='83' />
                </colgroup>
                <colgroup>
                  <col span={2} width='78' />
                </colgroup>
                <colgroup>
                  <col width='91' />
                </colgroup>
                <colgroup>
                  <col width='85' />
                </colgroup>
                <colgroup>
                  <col width='86' />
                </colgroup>
                <colgroup>
                  <col width='37' />
                </colgroup>
                <tr>
                  <td rowSpan={2} height='36' align='left' valign='middle'>
                    <br />
                    <img
                      src='assets/images/ps_doc.png'
                      width={44}
                      height={36}
                      // hspace={21}
                      // vspace={0}
                    />
                  </td>
                  <td align='left' valign='middle'>
                    <br />
                  </td>
                  <td colSpan={8} align='left' valign='middle'>
                    บริษัท น้ำตาลพิษณุโลก จำกัด
                  </td>
                  <td align='left' valign='bottom'>
                    <br />
                  </td>
                  <td align='right' valign='middle'>
                    <br />
                  </td>
                  <td colSpan={2} align='right' valign='middle'>
                    FM-FF-02 Rev.06
                  </td>
                  <td align='left' valign='bottom'>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
                <tr>
                  <td>Column 1</td>
                  <td>Column 2</td>
                  <td>Column 3</td>
                  <td>Column 4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <style jsx>{`
        div,
        table,
        thead,
        tbody,
        tfoot,
        tr,
        th,
        td,
        p {
          font-family: 'Angsana New';
          font-size: 10px;
        }
        a.comment-indicator:hover + comment {
          background: #ffd;
          position: absolute;
          display: block;
          border: 1px solid black;
          padding: 0.5em;
        }
        a.comment-indicator {
          background: red;
          display: inline-block;
          border: 1px solid black;
          width: 0.5em;
          height: 0.5em;
        }
        comment {
          display: none;
        }
      `}</style>
      <style global jsx>{`
         {
          /* @import url('//fonts.googleapis.com/css?family=Montserrat:400,700'); */
        }

        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #fafafa;
          color: #414142;
          font: 12pt 'Angsana New', sans-serif;
          -webkit-print-color-adjust: exact !important;
        }
        * {
          box-sizing: border-box;
          -moz-box-sizing: border-box;
        }

        .page-container {
          width: 210mm;
          min-height: 297mm;
          padding: 0mm;
          margin: 5mm auto;
          border: 1px #d3d3d3 solid;
          border-radius: 5px;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .page-inner {
          padding: 0;
          height: 297mm;
          padding: 5mm;
        }

        .page-inner table,
        .page-inner td,
        .page-inner th {
          padding: 2mm;
          border-collapse: collapse;
          border: 1px solid #414142;
        }

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          html,
          body {
            width: 210mm;
            height: 297mm;
          }
          .page-container {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
          }
        }

        .controls-container {
          color: #414142;
          background: #f1f1f2;
          padding: 5px;
          border: 1px solid #d1d3d4;
          border-radius: 2px;
          position: fixed;
          top: 50px;
          left: 10px;
          font-size: 12px;
        }

        .controls-container button {
          background-color: #333333;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: block;
          width: 100%;
          margin-bottom: 5px;
          outline: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .controls-container button:hover {
          background-color: #4caf50;
        }

        @media print {
          .controls-container {
            display: none !important;
          }
        }
      `}</style>

      {/* <style jsx>{`
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #fafafa;
          font: 12pt 'Tahoma';
        }
        * {
          box-sizing: border-box;
          -moz-box-sizing: border-box;
        }
        .page {
          width: 210mm;
          min-height: 297mm;
          padding: 20mm;
          margin: 10mm auto;
          border: 1px #d3d3d3 solid;
          border-radius: 5px;
          background: white;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .subpage {
          padding: 1cm;
          border: 5px red solid;
          height: 257mm;
          outline: 2cm #ffeaea solid;
        }

        @page {
          size: A4;
          margin: 0;
        }
        @media print {
          html,
          body {
            width: 210mm;
            height: 297mm;
          }
          .page {
            margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
          }
        }
      `}</style> */}
    </>
  );
};

export default Print;

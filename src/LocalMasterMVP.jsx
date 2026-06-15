import React, { useState } from 'react';

export default function LocalMasterMVP() {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [missionDone, setMissionDone] = useState(false);

  return (
    <div className="max-w-md mx-auto h-screen bg-gray-100 text-gray-900 font-sans flex flex-col">
      <header className="p-6 bg-white flex justify-between items-end pb-4 border-b border-gray-200">
        <div>
          <p className="text-sm text-gray-500 font-medium">우리 동네</p>
          <h1 className="text-2xl font-bold tracking-tight">마이크로 미션</h1>
        </div>
      </header>

      <main className="flex-1 p-4 overflow-y-auto space-y-4">
        {!isCameraOpen && !missionDone && (
          <>
            {/* 미션 카드 1 */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">푸른공원 벤치 파손 확인</h3>
                  <p className="text-gray-500 mt-1">도보 5분 거리 · 지자체 데이터 수집</p>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-bold">1,000 P</span>
              </div>
              <button
                onClick={() => setIsCameraOpen(true)}
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl text-lg"
              >
                사진 찍고 인증하기
              </button>
            </div>

            {/* 미션 카드 2 */}
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 opacity-60">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">우리동네 마트 전단지 수령</h3>
                  <p className="text-gray-500 mt-1">도보 12분 거리 · 마감됨</p>
                </div>
              </div>
            </div>
          </>
        )}

        {isCameraOpen && !missionDone && (
          <div className="h-full flex flex-col items-center justify-center space-y-6">
            <div className="w-full h-64 bg-gray-300 rounded-2xl flex items-center justify-center border-4 border-dashed border-gray-400">
              <span className="text-gray-500 font-medium text-lg">(카메라 뷰어 영역)</span>
            </div>
            <button
              onClick={() => {
                setIsCameraOpen(false);
                setMissionDone(true);
              }}
              className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl text-xl shadow-lg"
            >
              촬영 완료 및 전송
            </button>
          </div>
        )}

        {missionDone && (
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center mt-10">
            <h2 className="text-2xl font-bold mb-2">인증 완료!</h2>
            <p className="text-gray-600 mb-6">지역 화폐 1,000P가 입금되었습니다.</p>
            <button
              onClick={() => {
                setMissionDone(false);
                setIsCameraOpen(false);
              }}
              className="w-full bg-gray-200 text-gray-800 font-bold py-4 rounded-xl text-lg"
            >
              다른 미션 찾기
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

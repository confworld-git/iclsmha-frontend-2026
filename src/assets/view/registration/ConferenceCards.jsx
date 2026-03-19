import React from 'react';
import { Users, FileText, AlertCircle, Star } from 'lucide-react';

export default function ConferenceCards() {
  return (
    <div className="w-full space-y-8">
      {/* Group Discount Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="relative p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Group Discount</h1>
          </div>
          
          <div className="h-px bg-gradient-to-r from-cyan-500/50 to-transparent mb-6"></div>
          
          <h2 className="text-xl text-slate-300 mb-4 font-medium">You qualify for a discounted registration fee if:</h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">You are a group of 5 members or more.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">You are a co-author of a paper presentation.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Star className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-amber-800 font-medium mb-1">Special Offer for Large Groups</p>
                <p className="text-sm text-amber-700">
                  If your group consists of more than 10 members, please reach out to our Academic Partnership Team to discuss a higher discount percentage on the registration fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple Papers Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full -translate-y-16 -translate-x-16"></div>
        <div className="relative p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Instructions for Multiple Paper Presentations</h1>
          </div>
          
          <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mb-6"></div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">An author may submit and present a maximum of <span className="font-semibold text-purple-300">3 papers</span> at the conference.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">If you are presenting more than one paper, <span className="font-semibold text-purple-300">full payment is required</span> for the first paper.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">Additional oral or poster presentations incur an <span className="font-semibold text-purple-300">additional fee of $150 USD</span> each.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">Papers requiring Scopus publication require <span className="font-semibold text-purple-300">publication fees</span> for each paper.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-slate-200">For more than 3 papers, additional papers can be presented by a co-author on full registration.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-blue-800 font-medium mb-1">Important Deadline</p>
                <p className="text-sm text-blue-700">
                  Confirmation on the number of papers should be given to the Conference Coordinator 3 weeks prior to the final payment deadline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}